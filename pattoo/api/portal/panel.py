"""Pattoo. Posting Routes."""

# Standard imports
import os
import json
import sys
from random import randrange
import hashlib
import uuid

# Flask imports
from flask import Blueprint, request, abort, session, jsonify
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

# Define the PANEL global variable
PANEL = Blueprint('PANEL', __name__)


@PANEL.route('/admin', methods=['GET', 'POST'])
def index():
    """Admin portal.

    Args:
        None

    Returns:
        render (html): Admin portal page
        response (int): Response code

    """
    # Prepare login form
    loginF = LoginForm()

    if request.method == 'POST':
        username = (request.form['username']).encode()
        password = (request.form['password']).encode()

        with db.db_query(20156, close=False) as session:
            user = session.query(UserModel).filter_by(
                username=username).first()

            print("User found")
    return render_template('index.html', form=loginF)