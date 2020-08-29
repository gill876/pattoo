"""Pattoo. Posting Routes."""

# Standard imports
import os
import json
import sys
from random import randrange
import hashlib
import uuid
import crypt

# Flask imports
from flask import Blueprint
from flask import request, abort, session, jsonify, redirect, url_for
from flask import render_template
from flask import  session

# pattoo imports
from pattoo_shared import log
from pattoo_shared.constants import CACHE_KEYS
from pattoo_shared.configuration import ServerConfig as Config
from pattoo.constants import PATTOO_API_AGENT_NAME
from pattoo_shared.files import get_gnupg
from pattoo.db import db
from pattoo.db.models import User as UserModel

# Import server resources
from .forms import LoginForm
from .forms import AddUserForm

# Define the PANEL global variable
PANEL = Blueprint('PANEL', __name__)


@PANEL.route('/api/login', methods=['POST'])
def login():
    """Login API link.

    Args:
        None

    Returns:
        response (dict): Response Message

    """
    # Prepare login form
    loginF = LoginForm()

    if request.method == 'POST':
        response = {'data':{'message': 'Form not validated'}}
        loginF.username.data = request.form['username']
        loginF.password.data = request.form['password']

        # Validate that form has all required data fields entered and
        # the correct CSRF token

        if loginF.validate_on_submit():
            # Have a response so that if the user doesn't exist,
            # a response would be sent
            response = {'data':{'message': 'Username not found'}}
            username = (loginF.username.data).encode() # Encode for database query
            password = loginF.password.data
            with db.db_query(20164, close=False) as db_session:
                user = db_session.query(UserModel).filter_by(
                    username=username).first()

                # If the user was found, but the password did not match,
                # produce error response
                response = {'data':{'message': 'Password incorrect'}}

                # Decode the password from the database to compare with the
                # form password
                db_password_decoded = (user.password).decode()

                # Separate the hash type, salt and password
                db_password_parts = (db_password_decoded).split('$')

                # Hash form password with hash type and salt from the database
                hashed_form_password = crypt.crypt(
                    password, "${}${}".format(db_password_parts[1], db_password_parts[2])
                )

                # Compare hashed password with database hashed password
                if hashed_form_password == db_password_decoded:
                    response = {'data':{'message': 'Login successful'}}

                    # Store user ID in session
                    session['idx_user'] = user.idx_user

    # New Flask automatically turns returned dictionary into json
    return response


@PANEL.route('/dashboard', methods=['GET'])
def dashboard():
    """Dashboard.
    
    Args:
        None

    Returns:
        None
    """
    print(session.get('idx_user', "Nothing"))
    if 'idx_user' not in session:
        return redirect('/admin')

    return "Dashboard"


@PANEL.route('/adduser', methods=['GET', 'POST'])
def adduser():
    """Add user.
    
    Args:
        None
        
    Returns:
        None

    """
    addUserF = AddUserForm()

    if request.method == 'POST' and addUserF.validate_on_submit():
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        username = request.form['username']
        password = request.form['password']
        enabled = request.form['enabled']

        print(firstname)
        print(lastname)
        print(username)
        print(password)
        print(enabled)

        # with db.db_modify(20156, close=False) as db_session:


    return render_template('adduser.html', form=addUserF)

@PANEL.route('/', defaults={'path': ''})
@PANEL.route('/<path:path>')
def react_index(path):
    """
    Because we use HTML5 history mode in vue-router we need to configure our
    web server to redirect all routes to index.html. Hence the additional route
    "/<path:path".
    Also we will render the initial webpage and then let VueJS take control.
    """
    return render_template('index.html', flask_token="Hello world")
