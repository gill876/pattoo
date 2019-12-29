#!/usr/bin/env python3
"""Check correct database setup.

Attempts to create database tables.

"""

# Main python libraries
from __future__ import print_function
import sys
import os

# PIP3 imports
from sqlalchemy import create_engine

# Try to create a working PYTHONPATH
EXEC_DIR = os.path.dirname(os.path.realpath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(EXEC_DIR, os.pardir))
if EXEC_DIR.endswith('/pattoo/setup') is True:
    sys.path.append(ROOT_DIR)
else:
    print(
        'This script is not installed in the "pattoo/bin" directory. '
        'Please fix.')
    sys.exit(2)


# Pattoo libraries
from pattoo_shared import log
from pattoo.configuration import ConfigPattoo as Config
from pattoo.db import URL
from pattoo.db.models import BASE
from pattoo.db.table import agent_group, language, pair_xlate_group, pair_xlate


def insertions():
    """Insert the necessary table ForeignKey values to satisfy defaults.

    Args:
        None

    Returns:
        None

    """
    # Initialize key variables
    default_description = 'Pattoo Default'
    languages = {}
    xlate_data = [
        ('IfMIB Agents', [
            ('en', 'agent_snmp_ifmibd_ifalias', 'Interface Alias'),
            ('en', 'agent_snmp_ifmibd_ifdescr', 'Interface Description'),
            ('en', 'agent_snmp_ifmibd_ifhcinbroadcastpkts', 'Interface Broadcast Packets (HC inbound)'),
            ('en', 'agent_snmp_ifmibd_ifhcinmulticastpkts', 'Interface Multicast Packets (HC inbound)'),
            ('en', 'agent_snmp_ifmibd_ifhcinoctets', 'Interface Traffic (HC inbound)'),
            ('en', 'agent_snmp_ifmibd_ifhcinucastpkts', 'Interface Unicast Packets (HC inbound)'),
            ('en', 'agent_snmp_ifmibd_ifhcoutbroadcastpkts', 'Interface Broadcast Packets (HC outbound)'),
            ('en', 'agent_snmp_ifmibd_ifhcoutmulticastpkts', 'Interface Multicast Packets (HC outbound)'),
            ('en', 'agent_snmp_ifmibd_ifhcoutoctets', 'Interface Traffic (HC outbound)'),
            ('en', 'agent_snmp_ifmibd_ifhcoutucastpkts', 'Interface Unicast Packets (HC outbound)'),
            ('en', 'agent_snmp_ifmibd_ifinbroadcastpkts', 'Interface Broadcast Packets (inbound)'),
            ('en', 'agent_snmp_ifmibd_ifinmulticastpkts', 'Interface Multicast Packets (inbound)'),
            ('en', 'agent_snmp_ifmibd_ifinoctets', 'Interface Traffic (inbound)'),
            ('en', 'agent_snmp_ifmibd_ifname', 'Interface Name'),
            ('en', 'agent_snmp_ifmibd_ifoutbroadcastpkts', 'Interface Broadcast Packets (outbound)'),
            ('en', 'agent_snmp_ifmibd_ifoutmulticastpkts', 'Interface Multicast Packets (outbound)'),
            ('en', 'agent_snmp_ifmibd_ifoutoctets', 'Interface Traffic (outbound)'),
            ('en', 'agent_snmp_ifmibd_oid', 'SNMP OID'),
            ('en', 'agent_snmpd_ifalias', 'Interface Alias'),
            ('en', 'agent_snmpd_ifdescr', 'Interface Description'),
            ('en', 'agent_snmpd_ifname', 'Interface Name'),
            ('en', 'agent_snmpd_oid', 'SNMP OID')]),
        ('OS Agents', [
            ('en', 'agent_os_release', 'OS Release'),
            ('en', 'agent_os_type', 'OS Type'),
            ('en', 'agent_os_version', 'OS Version'),
            ('en', 'agent_os_cpus', 'OS CPU Count'),
            ('en', 'agent_os_hostname', 'Hostname'),
            ('en', 'agent_os_disk_partition_device', 'Disk Partition'),
            ('en', 'agent_os_disk_partition_fstype', 'Filesystem Type'),
            ('en', 'agent_os_disk_partition_mountpoint', 'Mount Point'),
            ('en', 'agent_os_disk_partition_opts', 'Partition Options'),
            ('en', 'agent_os_cpu_times_percent_user', 'User (Percent CPU Usage)'),
            ('en', 'agent_os_cpu_times_percent_nice', 'Nice (Percent CPU Usage)'),
            ('en', 'agent_os_cpu_times_percent_system', 'System (Percent CPU Usage)'),
            ('en', 'agent_os_cpu_times_percent_idle', 'Idle (Percent CPU Usage)'),
            ('en', 'agent_os_cpu_times_percent_iowait', 'IO Wait (Percent CPU Usage)'),
            ('en', 'agent_os_cpu_times_percent_irq', 'IRQ (Percent CPU Usage)'),
            ('en', 'agent_os_cpu_times_percent_softirq', 'Soft IRQ (Percent CPU Usage)'),
            ('en', 'agent_os_cpu_times_percent_steal', 'Steal (Percent CPU Usage)'),
            ('en', 'agent_os_cpu_times_percent_guest', 'Guest (Percent CPU Usage)'),
            ('en', 'agent_os_cpu_times_percent_guest_nice', 'Guest / Nice(Percent CPU Usage)'),
            ('en', 'agent_os_cpu_times_user', 'User (CPU Usage)'),
            ('en', 'agent_os_cpu_times_nice', 'Nice (CPU Usage)'),
            ('en', 'agent_os_cpu_times_system', 'System (CPU Usage)'),
            ('en', 'agent_os_cpu_times_idle', 'Idle (CPU Usage)'),
            ('en', 'agent_os_cpu_times_iowait', 'IO Wait (CPU Usage)'),
            ('en', 'agent_os_cpu_times_irq', 'IRQ (CPU Usage)'),
            ('en', 'agent_os_cpu_times_softirq', 'Soft IRQ (CPU Usage)'),
            ('en', 'agent_os_cpu_times_steal', 'Steal (CPU Usage)'),
            ('en', 'agent_os_cpu_times_guest', 'Guest (CPU Usage)'),
            ('en', 'agent_os_cpu_times_guest_nice', 'Guest / Nice(CPU Usage)'),
            ('en', 'agent_os_cpu_stats_ctx_switches', 'CPU (Context Switches)'),
            ('en', 'agent_os_cpu_stats_interrupts', 'CPU (Context Switches)'),
            ('en', 'agent_os_cpu_stats_soft_interrupts', 'CPU (Soft Interrupts)'),
            ('en', 'agent_os_cpu_stats_syscalls', 'CPU (System Calls)'),
            ('en', 'agent_os_memory_total', 'Memory (Total)'),
            ('en', 'agent_os_memory_available', 'Memory (Available)'),
            ('en', 'agent_os_memory_percent', 'Memory (Percent)'),
            ('en', 'agent_os_memory_used', 'Memory (Used)'),
            ('en', 'agent_os_memory_free', 'Memory (Free)'),
            ('en', 'agent_os_memory_active', 'Memory (Active)'),
            ('en', 'agent_os_memory_inactive', 'Memory (Inactive)'),
            ('en', 'agent_os_memory_buffers', 'Memory (Buffers)'),
            ('en', 'agent_os_memory_cached', 'Memory (Cached)'),
            ('en', 'agent_os_memory_shared', 'Memory (Shared)'),
            ('en', 'agent_os_memory_slab', 'Memory (Slab)'),
            ('en', 'agent_os_swap_memory_total', 'Swap Memory (Total)'),
            ('en', 'agent_os_swap_memory_used', 'Swap Memory (Used)'),
            ('en', 'agent_os_swap_memory_free', 'Swap Memory (Free)'),
            ('en', 'agent_os_swap_memory_percent', 'Swap Memory (Percent)'),
            ('en', 'agent_os_swap_memory_sin', 'Swap Memory (In)'),
            ('en', 'agent_os_swap_memory_sout', 'Swap Memory (Out)'),
            ('en', 'agent_os_disk_partition_disk_usage_total', 'Disk size'),
            ('en', 'agent_os_disk_partition_disk_usage_used', 'Disk Utilization'),
            ('en', 'agent_os_disk_partition_disk_usage_free', 'Disk Free'),
            ('en', 'agent_os_disk_partition_disk_usage_percent', 'Disk Percentage Utilization'),
            ('en', 'agent_os_disk_io_read_count', 'Disk I/O (Read Count)'),
            ('en', 'agent_os_disk_partition', 'Disk Partition'),
            ('en', 'agent_os_disk_io_write_count', 'Disk I/O (Write Count)'),
            ('en', 'agent_os_disk_io_read_bytes', 'Disk I/O (Bytes Read)'),
            ('en', 'agent_os_disk_io_write_bytes', 'Disk I/O (Bytes Written)'),
            ('en', 'agent_os_disk_io_read_time', 'Disk I/O (Read Time)'),
            ('en', 'agent_os_disk_io_write_time', 'Disk I/O (Write Time)'),
            ('en', 'agent_os_disk_io_read_merged_count', 'Disk I/O (Read Merged Count)'),
            ('en', 'agent_os_disk_io_write_merged_count', 'Disk I/O (Write Merged Count)'),
            ('en', 'agent_os_disk_io_busy_time', 'Disk I/O (Busy Time)'),
            ('en', 'agent_os_network_io_bytes_sent', 'Network I/O (Bandwidth Inbound)'),
            ('en', 'agent_os_network_io_interface', 'Network Interface'),
            ('en', 'agent_os_network_io_bytes_recv', 'Network I/O (Bandwidth Outbound)'),
            ('en', 'agent_os_network_io_packets_sent', 'Network I/O (Packets Sent)'),
            ('en', 'agent_os_network_io_packets_recv', 'Network I/O (Packets Received)'),
            ('en', 'agent_os_network_io_errin', 'Network I/O (Errors Inbound)'),
            ('en', 'agent_os_network_io_errout', 'Network I/O (Errors Outbound)'),
            ('en', 'agent_os_network_io_dropin', 'Network I/O (Drops Inbound)'),
            ('en', 'agent_os_network_io_dropout', 'Network I/O (Drops Outbound)')])
    ]

    print('??: Attempting to insert default database table entries.')

    # Insert into Language
    if language.idx_exists(1) is False:
        language.insert_row('en', 'English')

    # Insert into PairXlateGroup
    if pair_xlate_group.idx_exists(1) is False:
        # Create the default PairXlateGroup
        pair_xlate_group.insert_row(default_description)

        # Create PairXlateGroup for some pattoo agents
        for description, rows in xlate_data:
            # Get PairXlateGroup index value after creating an entry
            pair_xlate_group.insert_row(description)
            idx_pair_xlate_group = pair_xlate_group.exists(description)

            # Insert values into the PairXlate table for PairXlateGroup
            for row in rows:
                _language = row[0]
                _key = row[1]
                _value = row[2]
                idx_language = languages.get(language)
                if bool(idx_language) is False:
                    idx_language = language.exists(_language)
                pair_xlate.insert_row(
                    _key, _value, idx_language, idx_pair_xlate_group)

    # Insert into AgentGroup
    if agent_group.idx_exists(1) is False:
        agent_group.insert_row(default_description)
        for description, _ in xlate_data:
            agent_group.insert_row(description)

    print('OK: Database table entries inserted.')


def _mysql():
    """Create database tables.

    Args:
        None

    Returns:
        None

    """
    # Initialize key variables
    config = Config()
    pool_size = config.db_pool_size()
    max_overflow = config.db_max_overflow()

    # Add MySQL to the pool
    engine = create_engine(
        URL, echo=True,
        encoding='utf8',
        max_overflow=max_overflow,
        pool_size=pool_size, pool_recycle=3600)

    # Try to create the database
    print('??: Attempting to Connect to configured database.')
    try:
        sql_string = ('''\
ALTER DATABASE {} CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci\
'''.format(config.db_name()))
        engine.execute(sql_string)
    except:
        log_message = (
            '''\
ERROR: Cannot connect to database "{}" on server "{}". Verify database server \
is started. Verify database is created. Verify that the configured database \
authentication is correct.'''.format(config.db_name(), config.db_hostname()))
        log.log2die(20086, log_message)

    # Apply schemas
    print('OK: Database connected.')
    print('??: Attempting to create database tables.')
    BASE.metadata.create_all(engine)
    print('OK: Database tables created.')


def main():
    """Configure database.

    Args:
        None

    Returns:
        None

    """
    # Initialize key variables
    use_mysql = True

    # Create DB
    if use_mysql is True:
        _mysql()

    # Insert ForeignKey values
    insertions()


if __name__ == '__main__':
    # Run setup
    main()
