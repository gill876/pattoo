=====================
The Management Portal
=====================

#. Prerequisites_

#. `Quick Run`_

#. `Addtional Details`_

    - Build_
    - `Add images inside Components`_
    - `Add custom folder for Components`_
    - `Run Portal background service`_
    - `Details on Portal background service`_
    - `The project was npm ejected`_
    - `TailwindCSS`_
    - `Custom CSS styles`_

Prerequisites
-------------
You must have Pattoo already installed and the database set up.
Please see installation_ documentation for more info.

.. _installation: https://github.com/PalisadoesFoundation/pattoo/blob/master/docs/installation.rst#basic-installation

Quick Run
---------

Install npm dependencies
^^^^^^^^^^^^^^^^^^^^^^^^

The npm dependencies are packages required for to modify and build React source codes.
The command to install the dependencies will require internet connection.
Go in the portal directory in ``pattoo/api/portal/react``.

Install project dependencies:

.. code-block:: bash

    ./pattoo/api/portal/react$ npm install

Building Components
^^^^^^^^^^^^^^^^^^^

Write your Components the ``src`` folder.
Remember your Components won't take effect until you build the project:

.. code-block:: bash

    ./react$ npm run build

If you just want to test out a component or have it available via a route link, add the route link inside the index.js.

Restart Pattoo daemon
^^^^^^^^^^^^^^^^^^^^^

Restart the Flask daemon(program that will run in the background), open web browser, enter IP address and port number of the Flask daemon:

.. code-block:: bash

    $ sudo su
    # systemctl restart pattoo_portald.service
    # exit

Open web browser and enter URI of the portal

Example: Assuming the configured IP is ``127.0.7.1``, and the port is ``20203``, as well as using a test route:

Browser URL => ``http://127.0.7.1:20203/test``

All done!

Didn't go as planned? Want to know why? Check out `Addtional Details`_.


Addtional Details
-----------------

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


Add images inside Components
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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


Add custom folder for Components
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

One may want to add folders with images or any other files to be accessed by the Components.  
Add the folder to the ``./react/public`` directory.  
Inside the HTML tag of the Component, prefix the folder name with ``/static/react/``.  
For example, the folder you want to add is called ``icons``. Therefore, if you want to link an icon called ``logo.ico`` inside  
the HTML tag of that folder, it would be:

    .. code-block:: html

            <!--Custom icon-->
            <img src="/static/react/icons/logo.ico.png" alt="Logo of Pattoo"/>

Please remember Build_ afterwards for the changes to take effect.


Run Portal background service
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The Pattoo background service is controlled by ``systemctl``, which means normal ``systemctl`` can be issued  
in the terminal to start, stop, check the status of, and restart the Pattoo background service.


Details on Portal background service
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The Portal background service runs as a Python Flask server controlled by ``systemctl``.  
Upon installation, the Portal background service was added to ``systemctl``.  
Ordinary ``systemctl`` commands can be used to controlled the Portal background service.
One can modify the configuration of the Portal background service/ Portal Flask server by making changes to the  
configuration file for Pattoo. Please check `configuration instructions`_.

.. _`configuration instructions`: https://github.com/PalisadoesFoundation/pattoo/blob/2020-Q4/docs/configuration.rst

The project was npm ejected
^^^^^^^^^^^^^^^^^^^^^^^^^^^

The project was npm ejected in order to add custom build directory. The build files are created in the custom
build directory and that directory is then served by the Flask server.
This article_ was used as reference.

Currently, the directory that is used by the Flask server/Pattoo background service is ``./live-serve``.

.. _article: https://blog.learningdollars.com/2019/11/29/how-to-serve-a-reactapp-with-a-flask-server/

TailwindCSS
^^^^^^^^^^^

TailwindCSS was used to style the HTML pages. This `video playlist`_ was used as reference.

A custom TailwindCSS command was created in the ``./react/package.json`` file. Currently, it is at line ``73`` and it is:  
``"build-css": "tailwindcss build ../tailwind/styles.css -o src/index.css"``
The ``./react/tailwind.config.js`` file is used to add custom TailwindCSS styles.

.. _`video playlist`: https://www.youtube.com/playlist?list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw


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
