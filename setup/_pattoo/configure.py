"""Install pattoo configuration."""

# Main python libraries
import os
import getpass
from pattoo_shared.installation import configure, shared
from pattoo_shared import files


def install(pattoo_home):
    """Start configuration process.

    Args:
        pattoo_home: The home directory of the pattoo user

    Returns:
        None
    """
    # Initialize key variables
    if os.environ.get('PATTOO_CONFIGDIR') is None:
        os.environ['PATTOO_CONFIGDIR'] = '{0}etc{0}pattoo'.format(os.sep)
    config_directory = os.environ.get('PATTOO_CONFIGDIR')
    shared_config = {
        'encryption': {
            'api_email': 'api_email@example.org',
            },
        'pattoo': {
            'language': 'en',
            'log_directory': (
                '/var/log/pattoo'),
            'log_level': 'debug',
            'cache_directory': (
                '/opt/pattoo-cache'),
            'daemon_directory': (
                '/opt/pattoo-daemon'),
            'system_daemon_directory': '/var/run/pattoo',
        }
    }

    agent_config = {
        'encryption': {
            'agent_email': 'agent_email@example.org'
        },
        'pattoo_agent_api': {
            'ip_address': '127.0.0.1',
            'ip_bind_port': 20201
        },
        'pattoo_web_api': {
            'ip_address': '127.0.0.1',
            'ip_bind_port': 20202,
        }
    }

    server_config = {
        'pattoo_db': {
            'db_pool_size': 10,
            'db_max_overflow': 20,
            'db_hostname': 'localhost',
            'db_username': 'pattoo',
            'db_password': 'password',
            'db_name': 'pattoo'
        },
        'pattoo_api_agentd': {
            'ip_listen_address': '0.0.0.0',
            'ip_bind_port': 20201,
        },
        'pattoo_apid': {
            'ip_listen_address': '0.0.0.0',
            'ip_bind_port': 20202,
        },
        'pattoo_ingesterd': {
            'ingester_interval': 3600,
            'batch_size': 500,
            'graceful_timeout': 10
        }
    }

    # Attempt to create configuration directory
    files.mkdir(config_directory)

    if getpass.getuser() != 'travis':
        # Create the pattoo user and group
        configure.create_user('pattoo', pattoo_home, '/bin/false', True)

        # Attempt to change the ownership of the config and home directories
        shared.chown(config_directory)
        shared.chown(pattoo_home)

    # Create configuration
    configure.configure_component('pattoo', config_directory, shared_config)

    configure.configure_component('pattoo_agent',
                                  config_directory,
                                  agent_config)

    configure.configure_component('pattoo_server',
                                  config_directory,
                                  server_config)