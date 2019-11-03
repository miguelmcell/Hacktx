from flask import Flask,Blueprint
from flask_pymongo import PyMongo
from routes import rt
app = Flask(__name__)

app.register_blueprint(rt)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True,threaded=True)
