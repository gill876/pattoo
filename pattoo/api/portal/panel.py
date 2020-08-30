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
from pattoo.db.models import Agent as AgentModel

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


@PANEL.route('/api/user', methods=['GET'])
def user():
    """User route.
    
    Args:
        None

    Returns:
        response (dict): Response Message

    """
    if session.get('idx_user', None) is None:
        response = {'data': {'message': 'Login first'}}
        return response

    enable = request.args.get('enable', type=int)
    user_id = request.args.get('user', type=int)
    if enable is not None and user_id is not None:
        change_enable = 1 if (enable == 0) else 0
        response = {'data': {'user_id': user_id, 'enable': change_enable, 'message': 'Not changed'}}
        with db.db_modify(20185, die=True) as db_session:
            db_session.query(UserModel).filter(
                UserModel.idx_user == user_id
            ).update({'enabled': change_enable})
            response = {'data': {'user_id': user_id, 'enable': change_enable, 'message': 'Changed'}}
        return response
    
    response = {'data':{'message': 'Query did not run'}}
    with db.db_query(20186, close=False) as db_session:
        users = db_session.query(UserModel).order_by(UserModel.idx_user).all()
        pp_users = []
        for user in users:
            pp_users+= [
                {
                    "idx_user": user.idx_user, "first_name": (user.first_name).decode(),
                    "last_name": (user.last_name).decode(),
                    "username": (user.username).decode(), "role": user.role,
                    "enabled": user.enabled
                }
            ]
        response = {'data':{'users': pp_users, 'message': 'Query ran'}}
    return response


@PANEL.route('/api/agent', methods=['GET'])
def agents():
    """Agents route.
    
    Args:
        None

    Returns:
        response (dict): Response Message

    """
    if session.get('idx_user', None) is None:
        response = {'data': {'message': 'Login first'}}
        return response

    enable = request.args.get('enable', type=int)
    idx_agent = request.args.get('agent', type=int)

    if enable is not None and idx_agent is not None:
        change_enable = 1 if (enable == 0) else 0
        response = {'data': {'idx_agent': idx_agent, 'enable': change_enable, 'message': 'Not changed'}}
        with db.db_modify(20188, die=True) as db_session:
            db_session.query(AgentModel).filter(
                AgentModel.idx_agent == idx_agent
            ).update({'enabled': change_enable})
            response = {'data': {'idx_agent': idx_agent, 'enable': change_enable, 'message': 'Changed'}}
        return response

    response = {'data':{'message': 'Query did not run'}}
    with db.db_query(20187, close=False) as db_session:
        agents = db_session.query(
            AgentModel.idx_agent, AgentModel.agent_id,
            AgentModel.agent_polled_target, AgentModel.agent_program,
            AgentModel.enabled
        ).order_by(AgentModel.idx_agent).all()

        pp_agents = []
        for agent in agents:
            pp_agents+= [{
                'idx_agent': agent[0], 'agent_id': (agent[1]).decode(),
                'agent_polled_target': (agent[2]).decode(),
                'agent_program': (agent[3]).decode(),
                'enabled': agent[4]
            }]
        response = {'data':{'agents': pp_agents, 'message': 'Query ran'}}
    return response    


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
