from flask import Flask, jsonify

app = Flask(__name__)

hello_list = ["Hello", "World!"]
hello_dict = {"Hello": "World!"}

@app.route("/")
def home():
    return "Hi"

@app.route("/normal")
def normal():
    return str(hello_list)

@app.route("/jsonified")
def jsonified_list():
    return jsonify(hello_list)

@app.route("/dict")
def dictionary():
    return hello_dict

if __name__ == "__main__":
    app.run(debug=True)
