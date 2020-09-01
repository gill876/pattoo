"""Routes for agents."""

# Flask imports
from flask import Blueprint
from flask import request, session

# Pattoo imports
from pattoo.db import db
from pattoo.db.models import Agent as AgentModel

# Define the AGENTS global variable
AGENTS = Blueprint('AGENTS', __name__)

@AGENTS.route('/api/agent', methods=['GET'])
def agents():
    """Agents route.
    
    Args:
        None

    Returns:
        response (dict): Response Message

    """
    if session.get('idx_user', None) is None:
        response = {'data': {'message': 'Login first'}}
        return response

    enable = request.args.get('enable', type=int)
    idx_agent = request.args.get('agent', type=int)

    if enable is not None and idx_agent is not None:
        change_enable = 1 if (enable == 0) else 0
        response = {'data': {'idx_agent': idx_agent, 'enable': enable, 'message': 'Not changed'}}
        with db.db_modify(20188, die=True) as db_session:
            db_session.query(AgentModel).filter(
                AgentModel.idx_agent == idx_agent
            ).update({'enabled': change_enable})
            response = {'data': {'idx_agent': idx_agent, 'enable': change_enable, 'message': 'Changed'}}
        return response

    response = {'data':{'message': 'Query did not run'}}
    with db.db_query(20187, close=False) as db_session:
        agents = db_session.query(
            AgentModel.idx_agent, AgentModel.agent_id,
            AgentModel.agent_polled_target, AgentModel.agent_program,
            AgentModel.enabled
        ).order_by(AgentModel.idx_agent).all()

        pp_agents = []
        for agent in agents:
            pp_agents+= [{
                'idx_agent': agent[0], 'agent_id': (agent[1]).decode(),
                'agent_polled_target': (agent[2]).decode(),
                'agent_program': (agent[3]).decode(),
                'enabled': agent[4]
            }]
        response = {'data':{'agents': pp_agents, 'message': 'Query ran'}}
    return response
