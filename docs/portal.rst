=====================
The Management Portal
=====================

#. Prerequisites_

#. `Ready, Set, ASAP! (It's quick I promise)`_

#. `The TL;DR section`_

    - `Creating and testing React components`_
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
    - Troubleshooting_

Prerequisites
-------------
You must have Pattoo already installed and the database set up.
Please see installation_ documentation for more info.

.. _installation: https://github.com/PalisadoesFoundation/pattoo/blob/master/docs/installation.rst#basic-installation

Ready, Set, ASAP! (It's quick I promise)
----------------------------------------

Ready
^^^^^
Go in the portal directory in ``pattoo/api/portal/react``.

Install project dependencies:

.. code-block:: bash

    ./pattoo/api/portal/react$ npm install

Set
^^^

Write your components the src folder.
Remember your Components won't take effect until you build the project:

.. code-block:: bash

    ./react$ npm run build

If you just want to test out a component or have it available via a route link, add the route link inside the index.js.

ASAP
^^^^

Restart the Flask daemon, open web browser, enter IP address and port number of the Flask daemon:

.. code-block:: bash

    $ sudo su
    # systemctl restart pattoo_portald.service
    # exit

Open web browser and enter URI of the portal

Example: Assuming the configured IP is ``127.0.7.1``, and the port is ``20203``, as well as using a test route:

Browser URL => ``http://127.0.7.1:20203/test``

All done!

Didn't go as planned? Want to know why? Check out `The TL;DR section`_.


The TL;DR section
-----------------

Creating and testing React components
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


Build
^^^^^

The optimized production build was configured to be created in the ``live-serve`` folder. Everything in that folder
will be served by the Flask app.

To make the optimized production build:

.. code-block:: bash

    ./react$ npm run build

To reconfigure optimized production build path:

    #. Go to the ``config`` directory inside the ``react`` directory
    
        ``.react/config``

    #. Open ``path.js``

        ``.react/config/path.js``

    #. Modify optimized production build

        Change path at line in ``path.js`` where:
            ``appBuild: resolveApp('..**/live-serve/**static/react')``


Preview
^^^^^^^


Add images
^^^^^^^^^^

To add images to components or HTML:

    #. Add images in the ``./react/public/img`` directory.

        Example: Adding ``hello.png`` to the directory:

        ``./react/public/img/hello.png``

    #. Prefix image name with ``/static/react/img/`` in HTML image tags.

        Example: Adding ``hello.png`` to the HTML image tag:

        .. code-block:: html

            <!--Hello image-->
            <img src="/static/react/img/hello.png" alt="Saying hello"/>

    #. Make new optimized production build:

        .. code-block:: bash

            ./react$ npm run build

    #. Restart Flask daemon.

        .. code-block:: bash

            $ sudo su
            # systemctl restart pattoo_portald.service
            # exit


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

To add custom CSS styles:

    #. Go to the ``tailwind`` directory and add styles just like you would with a normal CSS file, inside ``styles.css``.

        ``./tailwind/styles.css``

    #. Build the new ``index.css`` from the ``react`` directory.

        .. code-block:: bash

            ./react$ npm run build-css

    #. Build the new optimized production build.

        .. code-block:: bash

            ./react$ npm run build

    #. Restart Flask daemon.

        .. code-block:: bash

            $ sudo su
            # systemctl restart pattoo_portald.service
            # exit
    
    #. See your new styles applied when you go on your route link!

Apply custom CSS styles
^^^^^^^^^^^^^^^^^^^^^^^


Troubleshooting
^^^^^^^^^^^^^^^
