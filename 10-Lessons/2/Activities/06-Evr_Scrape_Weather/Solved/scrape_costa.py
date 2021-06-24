from splinter import Browser
from bs4 import BeautifulSoup as bs
from webdriver_manager.chrome import ChromeDriverManager
import time


def init_browser():
    executable_path = {"executable_path": ChromeDriverManager().install()}
    return Browser("chrome", **executable_path, headless=False)


def scrape_info():
    browser = init_browser()

    # Visit visitcostarica.herokuapp.com
    url = "https://visitcostarica.herokuapp.com/"
    browser.visit(url)

    time.sleep(1)

    # Scrape page into Soup
    html = browser.html
    soup = bs(html, "html.parser")

    # Get the average temps
    avg_temps = soup.find('div', id='weather')

    # Get the min avg temp
    min_temp = avg_temps.find_all('strong')[0].text

    # Get the max avg temp
    max_temp = avg_temps.find_all('strong')[1].text

    # BONUS: Find the src for the sloth image
    relative_image_path = soup.find_all('img')[2]["src"]
    sloth_img = url + relative_image_path

    # Store data in a dictionary
    costa_data = {
        "sloth_img": sloth_img,
        "min_temp": min_temp,
        "max_temp": max_temp
    }

    # Close the browser after scraping
    browser.quit()

    # Return results
    return costa_data
