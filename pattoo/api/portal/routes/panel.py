"""Routes for essential portal functionalities."""

# Standard import
import crypt

# Flask imports
from flask import Blueprint
from flask import request, session
from flask import render_template

# Pattoo imports
from pattoo.db.table.user import User as UserModel

# Import server resources
from .forms import LoginForm

# Define the PANEL global variable
PANEL = Blueprint('PANEL', __name__)

@PANEL.route('/api/login', methods=['POST'])
def login():
    """
    Login API link.

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
            username = loginF.username.data
            password = loginF.password.data

            user = UserModel(username)
            
            if user.valid_password(password):
                response = {'data':{'message': 'Login successful'}}

                # Store user ID in session
                session['idx_user'] = user.idx_user

    # New Flask automatically turns returned dictionary into json
    return response


@PANEL.route('/api/logout', methods=['GET'])
def logout():
    """
    Logout route.

    Args:
        None

    Returns:
        response (dict): Response Message

    """
    # Check if a user was stored in session first
    if session.get('idx_user', None) is None:
        response = {'data': {'message': 'Login first'}}
        # Block access if no user was found in session
        return response

    # Remove user from session
    session.pop('idx_user', None)
    response = {'data': {'message': 'Logged out'}}
    return response


@PANEL.route('/', defaults={'path': ''})
@PANEL.route('/<path:path>')
def react_index(path):
    """
    Render index.html and let React handle the rest.

    The additional route "/<path:path" is to redirect all
    routes to index.html

    Args:
        None

    Returns:
        (html): index.html render
    
    """
    return render_template('index.html')
