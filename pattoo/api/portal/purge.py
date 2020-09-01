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

# Import server resources
from .forms import PurgeForm

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
    
    if request.method == 'GET':
        return response
    
    if request.method == 'POST':
        response = {'data':{'message': 'Form not validated'}}

        # Prepare purge form
        purgeF = PurgeForm()

        purge_days = purgeF.days.data = int(request.form['days'])

        if purgeF.validate_on_submit():
            response = {'data':{'message': 'Invalid query'}}
            if purge_days > 0 and purge_days <= oldestDay:
                _today = datetime.datetime.now()
                _furthest = _today - datetime.timedelta(days=purge_days)

                # Anything less than the furthest is too old
                furthest_ts = datetime.datetime.timestamp(_furthest)

                # Condition timestamp to match with DataModel timestamp
                furthest_ts = int(furthest_ts * 1000)

                response = {'data':{'message': 'Query did not run'}}
                with db.db_modify(20193, die=True) as db_session:
                    db_session.query(DataModel).filter(
                        DataModel.timestamp < furthest_ts
                    ).delete()
                    response = {'data':{'message': 'Purged'}}

    return response