#!/usr/bin/env python3
"""Pattoo WSGI script.

Serves as a Gunicorn WSGI entry point for pattoo-api

"""

# Standard libraries
import sys
import os

# Try to create a working PYTHONPATH
_BIN_DIRECTORY = os.path.dirname(os.path.realpath(__file__))
_ROOT_DIRECTORY = os.path.abspath(os.path.join(_BIN_DIRECTORY, os.pardir))
_EXPECTED = '{0}pattoo{0}bin'.format(os.sep)
if _BIN_DIRECTORY.endswith(_EXPECTED) is True:
    sys.path.append(_ROOT_DIRECTORY)
    default_pip_dir = '/opt/pattoo-daemon/.python'
    sys.path.append(default_pip_dir)
else:
    print('''This script is not installed in the "{0}" directory. Please fix.\
'''.format(_EXPECTED))
    sys.exit(2)

# Pattoo libraries
from pattoo_shared import log
from pattoo_shared.agent import Agent, AgentCLI, AgentAPI
from pattoo.constants import (
    PATTOO_API_AGENT_NAME, PATTOO_API_AGENT_PROXY)
from pattoo.configuration import ConfigAgent as Config
from pattoo.api.agents import PATTOO_API_AGENT
from pattoo.db.db import connectivity


def main():
    """Main function to start the Gunicorn WSGI."""
    # Initialize key variables
    config = Config()

    # Make sure we have a database
    _ = connectivity()

    # Create agent object for web_proxy
    agent_gunicorn = Agent(PATTOO_API_AGENT_PROXY, config=config)

    # Create agent for daemon
    config = Config()
    agent_api = AgentAPI(
        PATTOO_API_AGENT_NAME,
        PATTOO_API_AGENT_PROXY,
        PATTOO_API_AGENT,
        config=config)

    # Add set API email address
    agent_api.set_api_email()

    # Set up encryption using Pgpier in Agent
    agent_api.set_gnupg() # Creation and retrieval of Pgpier object

    # Do control (API first, Gunicorn second)
    cli = AgentCLI()
    cli.control(agent_api)
    cli.control(agent_gunicorn)


if __name__ == '__main__':
    log.env()
    main()
