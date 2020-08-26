#!/usr/bin/env python3
"""CLI create testing"""

# Standard Python imports
import os
import unittest
import sys
import argparse
from unittest.mock import patch
from io import StringIO

# Try to create a working PYTHONPATH
EXEC_DIR = os.path.dirname(os.path.realpath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(
    os.path.abspath(os.path.join(
        os.path.abspath(os.path.join(
            os.path.abspath(os.path.join(
                EXEC_DIR,
                os.pardir)), os.pardir)), os.pardir)), os.pardir))
_EXPECTED = '{0}pattoo{0}tests{0}pattoo_{0}cli{0}cli'.format(os.sep)
if EXEC_DIR.endswith(_EXPECTED) is True:
    # We need to prepend the path in case the repo has been installed
    # elsewhere on the system using PIP. This could corrupt expected results
    sys.path.insert(0, ROOT_DIR)
else:
    print('''This script is not installed in the "{0}" directory. Please fix.\
'''.format(_EXPECTED))
    sys.exit(2)

# Pattoo unittest imports
from tests.libraries.configuration import UnittestConfig
from pattoo.cli.cli import _Create


class Test__Create(unittest.TestCase):
    """Testing CLI _Assign argparse class"""

    # Creating instance of _Create class
    parser = argparse.ArgumentParser()
    subparser = parser.add_subparsers(dest='action')
    _create = _Create(subparser)

    def test__init__(self):
        """Testing _Create __init__"""

        # Checking that all _Create class methods were ran and added relevant
        # entries to the choices dictionary
        choices = self._create.__dict__['subparsers'].choices

        # Determines that each choice in expected_choices is presented in the
        # choices dictionary and has a argparse.ArgumentParser instance
        expected_choices = ['language', 'key_translation_group']
        for exp_choice in expected_choices:
            self.assertIn(exp_choice, choices)
            self.assertIsInstance(choices[exp_choice], argparse.ArgumentParser)

    def test_language(self):
        """Testing _Create key_translation method"""

        # Checking that proper argparse.Namespace is made when passing cli
        # arguments to import a key_translation
        args = self.parser.parse_args(['create', 'language', '--code', 'code',
                                       '--name', 'name'])
        expected = argparse.Namespace(action='create', code='code', name='name',
                                      qualifier='language')
        self.assertEqual(args, expected)

    def test_key_translation_group(self):
        """Testing _Create agent_translation method"""

        # Checking that proper argparse.Namespace is made when passing cli
        # arguments to import a key_translation
        args = self.parser.parse_args(['create', 'key_translation_group',
                                        '--name', 'name'])
        expected = argparse.Namespace(action='create',  name='name',
                                      qualifier='key_translation_group')
        self.assertEqual(args, expected)


if __name__ == "__main__":
    # Make sure the environment is OK to run unittests
    config = UnittestConfig()
    config.create()

    # Do the unit test
    unittest.main()
