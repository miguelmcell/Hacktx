import pymongo
import json
from flask import Blueprint
from pymongo import MongoClient
from requests import get


client = pymongo.MongoClient("mongodb+srv://alex:b123r456u789@hacktx-wugyn.azure.mongodb.net/test?retryWrites=true&w=majority")
db = client['ifReturn']

rt = Blueprint('rt',__name__)


@rt.route('/')
@rt.route('/index')
def index():
    return "Hello, World!"

@rt.route('/allstates',methods=['GET'])
def get_states():
    states=db["prices"]
    responce=[]
    for state in states.find():
        state["_id"]=str(state["_id"])
        responce.append(state)
    return json.dumps(responce)



@rt.route('/allstate',methods=['GET'])
def get_state():
    states=db["prices"]
    responce=[]
    for state in states.find({},{"_id":0}):
        responce.append(state)
    return json.dumps(responce)
@rt.route('/juststates',methods=['GET'])
def just_states():
    states=db["prices"]
    responce=[]
    for state in states.find({},{"_id":0,"House Price":0,"Wealth":0}):
        responce.append(state)
    return json.dumps(responce)
@rt.route("/findstate/<searchstate>",methods=["GET"])
def find_states(searchstate):
    responce=[]
    states=db.prices
    ans = states.find_one({ "state" : searchstate })
    #print(ans)
    #print(type(ans), "____________________")
    ans = str(ans)
    return json.dumps(ans)


