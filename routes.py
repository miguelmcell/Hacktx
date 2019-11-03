import pymongo
import json
from flask import Blueprint
from requests import get
from pymongo import MongoClient


client = pymongo.MongoClient("mongodb+srv://alex:b123r456u789@hacktx-wugyn.azure.mongodb.net/test?retryWrites=true&w=majority")
db = client.ifReturn

rt = Blueprint('rt',__name__)


@rt.route('/')
@rt.route('/index')
def index():
    return "Hello, World!"

@rt.route('/allstates',methods=['GET'])
def get_states():
    states=db.collection.find()
    responce=[]
    for states in states:
        state['_id']=str(state['_id'])
        responce.append(state)
    return json.dumps(responce)



