# Installation of chromedriver

## macOS

* The easiest way to install ChromeDriver on a Mac is through Homebrew. You can verify your installation by running `brew -v` in terminal. If you get an error instead of a version number, visit the Homebrew website [https://brew.sh/](https://brew.sh/) to install Homebrew, and then run the command.

* If Homebrew is installed, simply run `brew cask install chromedriver` from the terminal.

* Verify your installation by running `chromedriver --version`.

* If you run into permission issues after installing chromedriver, you can grant permission by going to: `System Preferences → Security and Privacy → General → Allow Anyway`.

## Windows

* Visit the ChromeDriver [webpage](https://sites.google.com/a/chromium.org/chromedriver/downloads). Note that ChromeDriver updates really often, so the exact version you are using might be slightly different than the screenshots in these instructions. The screenshots below are for users running Chrome version 79 (your version will likely be later). Make sure match your download to the version of Chrome you’re currently using. Otherwise, you’ll likely run into an error. Follow these steps:

1. Click on the file that matches your version of Chrome.

   ![Images/01.png](Images/01.png)

2. Click `chromedriver_win32.zip` to download ChromeDriver for Windows.

   ![Images/02.png](Images/02.png)

3. Extract the executable program file.

   ![Images/03.png](Images/03.png)

4. Place the file in the same folder as your Python  web scraping script.

   ![Images/04.png](Images/04.png)

* Optional: if you would like to set the PATH variable for chromedriver you may wish to consult [https://zwbetz.com/download-chromedriver-binary-and-add-to-your-path-for-automated-functional-testing/](https://zwbetz.com/download-chromedriver-binary-and-add-to-your-path-for-automated-functional-testing/) or [https://www.computerhope.com/pathhlp.htm](https://www.computerhope.com/pathhlp.htm).
