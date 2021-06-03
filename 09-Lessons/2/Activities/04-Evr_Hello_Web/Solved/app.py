# 1. Import Flask
from flask import Flask

# 2. Create an app
app = Flask(__name__)


# 3. Define index route
@app.route("/")
def index():
    return "Hello, world!"

# 4. Define the about route
@app.route("/about")
def about():
    name = "Peleke"
    location = "Tien Shan"

    return f"My name is {name}, and I live in {location}."

# 5. Define the contact route
@app.route("/contact")
def contact():
    email = "peleke@example.com"

    return f"Questions? Comments? Complaints? Shoot an email to {email}."


# 6. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)
