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

# pattoo imports
from pattoo_shared import log
from pattoo_shared.constants import CACHE_KEYS
from pattoo_shared.configuration import ServerConfig as Config
from pattoo.constants import PATTOO_API_AGENT_NAME
from pattoo_shared.files import get_gnupg


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
    return render_template('index.html')