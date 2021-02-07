#!/usr/bin/env python3
"""Administer the Agent database table."""

from collections import namedtuple

# PIP3 imports
from sqlalchemy import and_

# Import project libraries
from pattoo.db import db
from pattoo.db.models import Agent


def idx_exists(idx):
    """Determine whether primary key exists.

    Args:
        idx: idx_agent

    Returns:
        result: True if exists

    """
    # Initialize key variables
    result = False
    rows = []

    # Get the result
    with db.db_query(20027) as session:
        rows = session.query(Agent.idx_agent).filter(
            Agent.idx_agent == int(idx))

    # Return
    for _ in rows:
        result = True
        break
    return bool(result)


def idx_agent(agent_id, agent_target, agent_program):
    """Get the db Agent.idx_agent value for a PattooDBrecord object.

    Args:
        agent_id: Agent ID value (pattoo_agent_id)
        agent_target: Agent target (pattoo_agent_polled_target)
        agent_program: Agent program (pattoo_agent_program)

    Returns:
        _idx_agent: Agent._idx_agent value. None if unsuccessful

    """
    # Create an entry in the database Checksum table
    _idx_agent = exists(agent_id, agent_target)
    if bool(_idx_agent) is False:
        # Create a record in the Agent table
        insert_row(agent_id, agent_target, agent_program)
        _idx_agent = exists(agent_id, agent_target)

    # Return
    return _idx_agent


def exists(agent_id, agent_target):
    """Get the db Agent.idx_agent value for specific Agent.

    Args:
        agent_id: Agent ID
        agent_target: Agent polled target

    Returns:
        result: Agent.idx_agent value

    """
    # Initialize key variables
    result = False
    rows = []

    # Get the result
    with db.db_query(20039) as session:
        rows = session.query(Agent.idx_agent).filter(and_(
            Agent.agent_id == agent_id.encode(),
            Agent.agent_polled_target == agent_target.encode(),
            ))

    # Return
    for row in rows:
        result = row.idx_agent
        break
    return result


def insert_row(agent_id, agent_target, agent_program):
    """Create the database Agent.agent value.

    Args:
        agent_id: Agent ID value (pattoo_agent_id)
        agent_target: Agent target (pattoo_agent_polled_target)
        agent_program: Agent program (pattoo_agent_program)

    Returns:
        None

    """
    # Filter invalid data
    if isinstance(agent_id, str) is True:
        # Insert and get the new agent value
        with db.db_modify(20036, die=True) as session:
            session.add(Agent(agent_id=agent_id.encode(),
                              agent_polled_target=agent_target.encode(),
                              agent_program=agent_program.encode()))


def assign(_idx_agent, _idx_pair_xlate_group):
    """Assign an agent to an agent group.

    Args:
        idx_agent: Agent index
        _idx_pair_xlate_group: idx_pair_xlate_group for the agent

    Returns:
        None

    """
    # Update
    with db.db_modify(20059, die=False) as session:
        session.query(Agent).filter(
            Agent.idx_agent == _idx_agent).update(
                {'idx_pair_xlate_group': _idx_pair_xlate_group}
            )


def idx_pair_xlate_group(agent_id):
    """Get the idx_pair_xlate_group of an agent.

    Args:
        agent_id: Agent ID

    Returns:
        result: idx_pair_xlate_group for the agent

    """
    # Initialize key variables
    result = False
    rows = []

    # Get the result
    with db.db_query(20079) as session:
        rows = session.query(Agent.idx_pair_xlate_group).filter(
            Agent.agent_id == str(agent_id).encode())

    # Return
    for row in rows:
        result = row.idx_pair_xlate_group
        break
    return result


def cli_show_dump():
    """Get entire content of the table.

    Args:
        None

    Returns:
        result: List of NamedTuples

    """
    # Initialize key variables
    result = []

    # Get the result
    with db.db_query(20042) as session:
        rows = session.query(Agent)

    # Process
    for row in rows:
        Record = namedtuple(
            'Record', 'idx_agent agent_program agent_target enabled')
        result.append(
            Record(
                idx_agent=row.idx_agent,
                enabled=row.enabled,
                agent_program=row.agent_program.decode(),
                agent_target=row.agent_polled_target.decode()))
    return result

def del_agent(agent_id):
    """Delete Agent table entry.

    Args:
        agent_id: str

    Returns:
        result: bool - True if successful

    """
    result = False

    with db.db_modify(20043, die=True) as session:
        session.query(Agent).filter(
            Agent.agent_id == agent_id.encode()
        ).delete()
        
        result = True
    
    return result
