# Installing pgAdmin and Postgres on a Mac

Similar to coding with Python using Visual Studio Code, SQL requires a code editor with the ability to execute the scripts developers (you!) create.

## Before you Begin

* Remember to choose the installation package specific to your operating system and download the latest version.

* Be prepared to record a password, this will be needed later!

## Download Link(s)

* [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

## Instructions

* After downloading the latest version of PostgreSQL 11, double click on the `postgresql-11.1-1-osx` file. **Note:** exact file version may be slightly different.

  ![postgresql-11.1-1-osx.png](../Images/postgresql-11.1-1-osx.png)

* Go through the Setup Wizard and install PostgreSQL. The default location is: `/Library/PostgreSQL/11`.

* Select the components to be installed. **Be sure to un-check `Stack Builder`.

  ![postgres_components.png](../Images/stack_builder_mac.png)

* Next, add your Data Directory. The default location is: `/Library/PostgreSQL/11/data`.

* Next, enter `postgres` as the password. **Be sure to record this password for future use.**

* The default port is `5432` and in the Advanced Options, locale can be set as `[Default locale]`.

* The final screen will be the `Pre Installation Summary`.

* When you are done you should have a folder in your Applications with these files.

  ![PostgreSQL_folder.png](../Images/PostgreSQL_folder.png)

* To confirm the installation, start `pgAdmin` (this will open in a new browser window) and connect to the default server by clicking on it and entering the password if prompted.
