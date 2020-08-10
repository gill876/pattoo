"""Initialize the PATTOO_PORTAL module."""

# Import PIP3 libraries
from flask import Flask
from flask_session import Session
import hashlib
import uuid
import datetime

# Define the global URL prefix
from pattoo_shared.constants import PATTOO_PORTAL_PREFIX
from pattoo_shared.configuration import BaseConfig
from pattoo_shared import files

# Import PATTOO_PORTAL Blueprints
from pattoo.api.portal.panel import PANEL
from pattoo.api.portal.status import STATUS

# Setup flask
PATTOO_PORTAL = Flask(__name__)

# Add secret key to Flask for cookies
PATTOO_PORTAL.config['SECRET_KEY'] = hashlib.sha256(
    str(uuid.uuid4()).encode()).hexdigest()

# Store the session cookies locally (for local session)
PATTOO_PORTAL.config['SESSION_TYPE'] = 'filesystem'

# The maximum amount of session cookies to store (for local session)
PATTOO_PORTAL.config['SESSION_FILE_THRESHOLD'] = 500

# Sign cookies (for local session)
PATTOO_PORTAL.config['SESSION_USE_SIGNER'] = True

# Store cookies permanently (for local session)
PATTOO_PORTAL.config['SESSION_PERMANENT'] = False

# Store cookies permanently (for local session)
PATTOO_PORTAL.config['PERMANENT_SESSION_LIFETIME'] = \
    datetime.timedelta(minutes=45)

# Location to store cookies (for local session)
config = BaseConfig()
PATTOO_PORTAL.config['SESSION_FILE_DIR'] = \
    files.get_session_cache_dir(config)

# Initialize Session plugin (for local session)
sess = Session()
sess.init_app(PATTOO_PORTAL)

# Register Blueprints
PATTOO_PORTAL.register_blueprint(
    PANEL, url_prefix=PATTOO_PORTAL_PREFIX)
PATTOO_PORTAL.register_blueprint(
    STATUS, url_prefix=PATTOO_PORTAL_PREFIX)
