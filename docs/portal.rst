=====================
The Management Portal
=====================

1. `Ready, Set, ASAP! (It's quick I promise)`_

2. `The TL;DR section`_

    - Build_
    - Preview_
    - `Add images`_
    - `Add Asset folder`_
    - `Run Flask daemon`_
    - `The Flask daemon`_
    - `I npm ejected`_
    - `TailwindCSS`_
    - `Custom CSS styles`_
    - `Apply custom CSS styles`_

Ready, Set, ASAP! (It's quick I promise)
----------------------------------------

Ready
^^^^^

Install project dependencies:
./pattoo-portal$ npm install

Set
^^^

Write your components the src folder.
Remember your Components won't take effect until you build the project:

.. code-block:: bash

    ./pattoo-portal$ npm build

If you just want to test out a component, add the route link inside the index.js.

ASAP
^^^^

Restart the Flask daemon, open web browser, enter IP address and port number of the Flask daemon:

.. code-block:: bash

    $ sudo su
    # systemctl restart ...
    # exit
    $ 

Open web browser and enter URI of the portal

Example: Assuming the configured IP is 127.0.7.1, and the port is 20203, as well as using a test route:

Browser URL => http://127.0.7.1:20203/test

All done!

Didn't go as planned? Want to know why? Check out `The TL;DR section`_.


The TL;DR section
-----------------

Build
^^^^^

Preview
^^^^^^^

Add images
^^^^^^^^^^

Add Asset folder
^^^^^^^^^^^^^^^^

Run Flask daemon
^^^^^^^^^^^^^^^^

The Flask daemon
^^^^^^^^^^^^^^^^

I npm ejected
^^^^^^^^^^^^^

TailwindCSS
^^^^^^^^^^^

Custom CSS styles
^^^^^^^^^^^^^^^^^

Apply custom CSS styles
^^^^^^^^^^^^^^^^^^^^^^^
