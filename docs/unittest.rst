Testing Your Code
=================

Make sure you create your own unittests for all the classes, methods, and functions you have created or modified. Place them in the `tests/` directory in a subdirectory that matches the relative location of your production code under the `pattoo/` directory.

      
Setting up Database Tables
--------------------------

Running the following script will set up the database tables and your environment for unittesting


.. code-block:: text

    $ setup/install.py developer all


Setting up Syslog Error Codes
-----------------------------

`pattoo` uses unique error code numbers for syslog messages to make troubleshooting easier. Run the `tests/bin/error_code_report.py` script before the unittests to make there are no duplicates. The unittests will fail if there are duplicates.

.. code-block:: text

    $ tests/bin/error_code_report.py

    Pattoo Logging Error Code Summary Report
    ----------------------------------------
    Starting Code              : 20001
    Ending Code                : 20141
    Duplicate Codes to Resolve : []
    Available Codes            : [20141, 20142, 20143, 20144, 20145]
    $

Everything is OK if there are no `Duplicate Codes to Resolve`.

Running Tests
-------------

The `tests/bin/do_all_tests.py` script will recursively run all unittests in the `tests/` directory.
