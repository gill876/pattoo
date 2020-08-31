"""Routes for datapoints."""

# Flask imports
from flask import Blueprint
from flask import request, session

# Pattoo imports
from pattoo.db import db
from pattoo.db.models import DataPoint as DataPModel
from pattoo.db.models import PairXlate as PairModel

# Define the AGENTS global variable
DATAPOINTS = Blueprint('DATAPOINTS', __name__)

@DATAPOINTS.route('/api/datapoints', methods=['GET'])
def datapoints():
    """
    """
    if session.get('idx_user', None) is None:
        response = {'data': {'message': 'Login first'}}
        return response

    # enable = request.args.get('enable', type=int)
    idx_agent = request.args.get('idx_agent', type=int)
    response = {'data':{'message': 'Query did not run'}}
    if idx_agent is not None:
        with db.db_query(20189, close=False) as db_session:
            datapoints = db_session.query(
                DataPModel, PairModel
            ).filter(
                PairModel.idx_pair_xlate == DataPModel.data_type
            ).filter(
                DataPModel.idx_agent == idx_agent
            ).all()
            pp_datapoints = []
            for datapoint in datapoints:
                pp_datapoints+= [{
                    'idx_agent': idx_agent,
                    'idx_datapoint': datapoint[0].idx_datapoint,
                    'ts_created': datapoint[0].ts_created.__str__(),
                    'enabled': datapoint[0].enabled,
                    'translation': (datapoint[1].translation).decode(),
                    'polling_interval': datapoint[0].polling_interval
                }]
            response = {'data':{'datapoints': pp_datapoints, 'message': 'Query ran'}}
    return response
