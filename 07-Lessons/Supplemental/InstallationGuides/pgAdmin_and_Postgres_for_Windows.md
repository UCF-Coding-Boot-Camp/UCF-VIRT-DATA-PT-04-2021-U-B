# Installing pgAdmin and Postgres on Windows

Similar to coding with Python using Visual Studio Code, SQL requires a code editor with the ability to execute the scripts developers (you!) create.

## Before you Begin

* Remember to choose the installation package specific to your operating system and download the latest version.

* Be prepared to record a password, this will be needed later!

## Download Link(s)

* [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

* [Installation Instructions](https://www.enterprisedb.com/docs/en/11.0/PG_Inst_Guide_v11/toc.html)

## Instructions

* After downloading the latest version of PostgreSQL 11, double click on the `postgresql-11.1-1-` file. **Note:** exact file version may be slightly different.

  ![postgresql-11.1-1-windows-x64.png](../Images/postgresql-11.1-1-windows-x64.png)

* Go through the Setup Wizard and install PostgreSQL. This default location is: `/Library/PostgreSQL/11`.

* Select the components to be installed. **Un-check the option to install [Stack Builder](https://www.enterprisedb.com/docs/en/9.3/pginstguide/PostgreSQL_Installation_Guide-08.htm#P230_11507)**.

  ![stack_builder.png](../Images/stack_builder_pc.png)

* Next, add your Data Directory. The default location is: `/Library/PostgreSQL/11/data`.

* Next, enter `postgres` as the password. **Be sure to record this password for future use.**

* The default port is `5432` and in the Advanced Options, locale can be set as `[Default locale]`.

* The final screen will be the `Pre Installation Summary`.

* When you are done, the `Postgres 11` folder can be accessed from the start menu of your computer.

  * This folder contains the `pgAdmin 4` application, which will be used throughout this unit.

  * To confirm the installation, start `pgAdmin` (this will open in a new browser window) and connect to the default server by clicking on it and entering the password if prompted.
