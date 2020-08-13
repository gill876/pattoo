"""Initialize the PATTOO_PORTAL module."""

# Import PIP3 and Flask libraries
from flask import Flask
from flask_session import Session
from flask_wtf.csrf import CSRFProtect
import hashlib
import uuid
import datetime

# Import Pattoo resources
from pattoo.constants import FOLDER_WEB_STATIC, FOLDER_WEB_TEMPLATE
from pattoo_shared.configuration import BaseConfig
from pattoo_shared import files

# Import PATTOO_PORTAL Blueprints
from pattoo.api.portal.panel import PANEL
from pattoo.api.portal.status import STATUS

# Setup flask
PATTOO_PORTAL = Flask(
    __name__,
    static_url_path='/static',
    static_folder=FOLDER_WEB_STATIC,
    template_folder=FOLDER_WEB_TEMPLATE
    )

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

# Initialize CSRF Protection
csrf = CSRFProtect(PATTOO_PORTAL)
csrf.init_app(PATTOO_PORTAL)

# Register Blueprints
PATTOO_PORTAL.register_blueprint(
    PANEL, url_prefix='')
PATTOO_PORTAL.register_blueprint(
    STATUS, url_prefix='')

# Function to easily find your assests
PATTOO_PORTAL.jinja_env.globals['static'] = (
    lambda filename: url_for(
        'static', filename=filename)
)

@PATTOO_PORTAL.context_processor
def inject():
    """Inject global variables for use by templates.

    Args:
        None

    Returns:
        (dict): Dictionary with global variables

    """
    # Return
    return dict(
        url_home='',
        url_static='/static')
