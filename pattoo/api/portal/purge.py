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
    # Check if a user was stored in session first
    if session.get('idx_user', None) is None:
        response = {'data': {'message': 'Login first'}}
        # Block access if no user was found in session
        return response

    response = {'data':{'message': 'Query did not run'}}
    with db.db_query(20192, close=False) as db_session:
        # Get the minimum timestamp of Data, which is the oldest timestamp
        oldest_data = db_session.query(func.min(DataModel.timestamp)).one()
        # oldest_data => (timestamp,)
        # oldest_data[0] => timestamp
        oldest_day = oldest_data[0]

        # Get timestamp of the moment and translate to the timestamp
        # form in the Data model
        _today = time.time() * 1000
        # Get different of the moment's timestamp and the oldest timestamp
        # from the Data model
        _difference = _today - oldest_day

        # Convert the difference into normal timestamp form then
        # convert into datetime object to retrieve the difference in the
        # number of days
        oldestDay = (datetime.datetime.fromtimestamp((_difference / 1000))).day

        response = {'data':{'oldestDay': oldestDay, 'message': 'Query ran'}}
    
    if request.method == 'GET':
        # return response if it was just a GET request
        # If it was not a GET request, the "oldestDay" variable will be
        # used below in the POST request
        return response
    
    if request.method == 'POST':
        response = {'data':{'message': 'Form not validated'}}

        # Prepare purge form
        purgeF = PurgeForm()

        purge_days = purgeF.days.data = int(request.form['days'])

        if purgeF.validate_on_submit():
            response = {'data':{'message': 'Invalid query'}}
            # Make sure that the purge days isn't less than 0 and check
            # that it's not greater than the oldest data that exits
            if purge_days > 0 and purge_days <= oldestDay:
                _today = datetime.datetime.now() # Get datetime of right now

                # Get difference in days of right now's datetime and the
                # purge days' datetime
                _furthest = _today - datetime.timedelta(days=purge_days)

                # Anything less than the furthest is too old and will be
                # deleted
                furthest_ts = datetime.datetime.timestamp(_furthest)

                # Convert timestamp to match with Data timestamp form
                furthest_ts = int(furthest_ts * 1000)

                response = {'data':{'message': 'Query did not run'}}
                with db.db_modify(20193, die=True) as db_session:
                    # Remove data older than the furthest timestamp
                    db_session.query(DataModel).filter(
                        DataModel.timestamp < furthest_ts
                    ).delete()
                    response = {'data':{'message': 'Purged'}}

    return response