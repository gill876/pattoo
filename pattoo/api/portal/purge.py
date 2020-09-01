"""Routes for purge."""

# Flask imports
from flask import Blueprint
from flask import request, session

# Standard import
from sqlalchemy import func
import datetime
import time

# Pattoo imports
from pattoo.db import db
from pattoo.db.models import Data as DataModel

# Define the AGENTS global variable
PURGE = Blueprint('PURGE', __name__)

@PURGE.route('/api/purge', methods=['GET', 'POST'])
def datapoints():
    """
    Handle purging of data.

    Args:
        None

    Returns:
        response (dict): Response Message

    """

    if session.get('idx_user', None) is None:
        response = {'data': {'message': 'Login first'}}
        return response

    response = {'data':{'message': 'Query did not run'}}
    with db.db_query(20192, close=False) as db_session:
        oldest_data = db_session.query(func.min(DataModel.timestamp)).one()
        oldest_day = oldest_data[0]

        _today = time.time() * 1000
        _difference = _today - oldest_day

        oldestDay = (datetime.datetime.fromtimestamp((_difference / 1000))).day

        response = {'data':{'oldestDay': oldestDay, 'message': 'Query ran'}}
        return response

    return response