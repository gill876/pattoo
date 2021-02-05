#!/usr/bin/env python3
"""Test pattoo configuration."""

import os
import unittest
import sys
import random
import string


# PIP3 imports
import requests
from flask_testing import TestCase, LiveServerTestCase
from flask_caching import Cache
from bs4 import BeautifulSoup


# Try to create a working PYTHONPATH
EXEC_DIR = os.path.dirname(os.path.realpath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(
    os.path.abspath(os.path.join(
        os.path.abspath(os.path.join(
            os.path.abspath(os.path.join(
                EXEC_DIR,
                os.pardir)), os.pardir)), os.pardir)), os.pardir))
_EXPECTED = '{0}pattoo{0}tests{0}pattoo_{0}api{0}portal'.format(os.sep)
if EXEC_DIR.endswith(_EXPECTED) is True:
    # We need to prepend the path in case the repo has been installed
    # elsewhere on the system using PIP. This could corrupt expected results
    sys.path.insert(0, ROOT_DIR)
else:
    print('''This script is not installed in the "{0}" directory. Please fix.\
'''.format(_EXPECTED))
    sys.exit(2)

from pattoo_shared import data
from pattoo.configuration import ConfigPortal as Config
from tests.libraries.configuration import UnittestConfig
from pattoo.api.portal import PATTOO_PORTAL as APP
from pattoo.db import URL
from pattoo.db.models import BASE
from pattoo.db.table import (
   language, pair_xlate_group, pair_xlate, agent_xlate, user, chart, favorite)
from pattoo.constants import DbRowUser, DbRowChart, DbRowFavorite
from pattoo.api.portal.routes.forms import LoginForm


class TestBasicFunctions(LiveServerTestCase):
    """Checks all functions and methods."""

    #########################################################################
    # General object setup
    #########################################################################

    @classmethod
    def setUpClass(cls):
        if user.exists('test_pattoo') is True:
            # Remove test user from database
            user.del_user('test_pattoo')

        if user.exists('test_pattoo') is False:
            # Creating initial password
            password = data.hashstring(
                ''.join(random.SystemRandom().choice(
                string.ascii_uppercase + string.digits) for _ in range(50)))

            # Inserting default user
            user.insert_row(
                DbRowUser(
                    username='test_pattoo',
                    password=password,
                    first_name='test',
                    last_name='pattoo',
                    role=1,
                    password_expired=1,
                    enabled=1)
                )
            
            cls.password = password # Store password for later use

    @classmethod
    def tearDownClass(cls):
        username = 'test_pattoo'
        # Remove test user from database
        user.del_user(username)

    def create_app(self):
        """Create the test APP for flask.

        Args:
            None

        Returns:
            app: Flask object

        """
        # Create APP and set configuration
        app = APP
        config = Config()

        app.config['TESTING'] = True
        app.config['LIVESERVER_PORT'] = config.ip_bind_port()
        os.environ['FLASK_ENV'] = 'development'

        # Clear the flask cache
        cache = Cache(config={'CACHE_TYPE': 'null'})
        cache.init_app(app)

        # Return
        return app

    def test_login(self):
        """Testing method / function login."""
        password = self.__class__.password

        # Initialize key variables
        expected_invalid = {'data':{'message': 'Form not validated'}}
        expected_nouser = {'data':{'message': 'Username not found'}}
        expected_success = '{\n  "data": {\n    "message": "Login successful"\n  }\n}\n'

        # Create URL
        config = Config()
        portal_url = "http://{}:{}".format(
            config.ip_listen_address(), config.ip_bind_port()
        )
        url = "{}/api/login".format(portal_url)

        # Create session
        s = requests.session()
        response = s.get(url) # sets cookie

        # Retrieve CSRF token
        soup = BeautifulSoup(response.text, 'lxml')
        csrf_token = soup.select_one('meta[id="csrf-token"]')['content']
        
        login_data = dict(username='test_pattoo', password=password)
        response = s.post(url, data=login_data, headers={'X-CSRFToken': csrf_token})
        result = response.text

        self.assertEqual(expected_success, result)

    def test_logout(self):
        """Testing method / function logout."""
        password = self.__class__.password

        # Initialize key variables
        expected_success = '{\n  "data": {\n    "message": "Logged out"\n  }\n}\n'

        # Create URL
        config = Config()
        portal_url = "http://{}:{}".format(
            config.ip_listen_address(), config.ip_bind_port()
        )
        url = "{}/api/login".format(portal_url)

        # Create session
        s = requests.session()
        response = s.get(url) # sets cookie

        # Retrieve CSRF token
        soup = BeautifulSoup(response.text, 'lxml')
        csrf_token = soup.select_one('meta[id="csrf-token"]')['content']
        
        # Login first
        login_data = dict(username='test_pattoo', password=password)
        response = s.post(url, data=login_data, headers={'X-CSRFToken': csrf_token})

        # Logout
        url = "{}/api/logout".format(portal_url)
        response = s.get(url)
        result = response.text

        self.assertEqual(expected_success, result)


if __name__ == '__main__':
    # Make sure the environment is OK to run unittests
    UnittestConfig().create()

    # Do the unit test
    unittest.main()
