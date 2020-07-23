#!/usr/bin/env python3
"""Test pattoo packages script."""
import os
import subprocess
import unittest
from random import random
import sys
import tempfile

# Try to create a working PYTHONPATH
EXEC_DIR = os.path.dirname(os.path.realpath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(
    os.path.abspath(os.path.join(
        os.path.abspath(os.path.join(
            EXEC_DIR, os.pardir)), os.pardir)), os.pardir))
_EXPECTED = '{0}pattoo{0}tests{0}setup_{0}_pattoo'.format(os.sep)
if EXEC_DIR.endswith(_EXPECTED) is True:
    # We need to prepend the path in case the repo has been installed
    # elsewhere on the system using PIP. This could corrupt expected results
    sys.path.insert(0, ROOT_DIR)
    sys.path.append(os.path.join(ROOT_DIR, 'setup'))
else:
    print('''This script is not installed in the "{0}" directory. Please fix.\
'''.format(_EXPECTED))
    sys.exit(2)

from pattoo_shared import data
from setup._pattoo.packages import install, install_missing_pip3
from tests.libraries.configuration import UnittestConfig


class Test_Install(unittest.TestCase):
    """Checks all functions for the Pattoo install script."""

    def test__init__(self):
        """Unnittest to test the __init__ function."""
        pass

    def test_install_missing_pip3(self):
        """Unittest to test the install_missing_pip3 function."""
        # Initialize key variables
        expected = True

        # Create temporary directory to install packages
        with tempfile.TemporaryDirectory() as temp_dir:
            # Attempt to install a test package
            install_missing_pip3('pandas', temp_dir, verbose=False)

            # Append temporary directory to python path
            sys.path.append(temp_dir)

            # Try except to determine if package was installed
            try:
                import pandas
                result = True
            except ModuleNotFoundError:
                result = False
            self.assertEqual(result, expected)

        # Test case that would cause the install_missing_pip3 function to fail
        with tempfile.TemporaryDirectory() as temp_dir:
            with self.assertRaises(SystemExit) as cm_:
                install_missing_pip3('This does not exist', temp_dir, False)
            self.assertEqual(cm_.exception.code, 2)

    def test_install(self):
        """Unittest to test the install function."""
        # Test with undefined requirements directory
        with self.subTest():
            with self.assertRaises(SystemExit) as cm_:
                requirements_dir = data.hashstring(str(random()))
                install(requirements_dir)
            self.assertEqual(cm_.exception.code, 3)

        # Test with default expected behaviour
        with self.subTest():
            # At least one expected package
            expected_package = 'PattooShared'
            expected = True

            # Create temporary directory
            with tempfile.TemporaryDirectory() as temp_dir:
                result = install(ROOT_DIR, temp_dir)

                # Get raw packages in requirements format
                packages = subprocess.check_output(
                    [sys.executable, '-m', 'pip', 'freeze'])

                # Get packages with versions removed
                installed_packages = [package.decode().split('==')[
                        0] for package in packages.split()]
                result = expected_package in installed_packages
                self.assertEqual(result, expected)


if __name__ == '__main__':
    # Make sure the environment is OK to run unittests
    UnittestConfig().create()

    # Do the unit test
    unittest.main()
