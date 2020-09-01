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
    Manage datapoints for an agent.

    Args:
        None
    
    Returns:
        response (dict): Response Message

    """
    if session.get('idx_user', None) is None:
        response = {'data': {'message': 'Login first'}}
        return response

    enabled = request.args.get('enabled', type=int)
    idx_agent = request.args.get('idx_agent', type=int)
    idx_datapoint = request.args.get('idx_datapoint', type=int)
    response = {'data':{'message': 'Query did not run'}}

    if enabled is not None and idx_agent is not None and idx_datapoint is not None:
        change_enabled = 1 if (enabled == 0) else 0
        response = {'data': {
            'idx_agent': idx_agent, 'idx_datapoint': idx_datapoint,
            'enabled': enabled, 'message': 'Not changed'
            }
        }
        with db.db_modify(20190, die=True) as db_session:
            db_session.query(DataPModel).filter(
                DataPModel.idx_agent == idx_agent,
                DataPModel.idx_datapoint == idx_datapoint
            ).update({'enabled': change_enabled})

            response = {'data': {
                'idx_agent': idx_agent, 'idx_datapoint': idx_datapoint,
                'enabled': change_enabled, 'message': 'Changed'
                }
            }
        return response

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
