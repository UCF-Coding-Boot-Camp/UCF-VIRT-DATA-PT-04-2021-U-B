# import necessary libraries
from flask import Flask, render_template

# create instance of Flask app
app = Flask(__name__)


# create route that renders index.html template
@app.route("/")
def index():
    team_list = ["Jumpers", "Dunkers", "Dribblers", "Passers"]
    return render_template("index.html", list=team_list)


# Uncomment for dictionary
# @app.route("/")
# def index():
#     player_dictionary = {"player_1": "Jessica",
#                          "player_2": "Mark"}
#     return render_template("index.html", dict=player_dictionary


if __name__ == "__main__":
    app.run(debug=True)
