from flask import Blueprint
from requests import get

rt = Blueprint('rt',__name__)


@rt.route('/')
@rt.route('/index')
def index():
    return "Hello, World!"

@rt.route('/allstates',methods=['GET'])
def get_states():
    states=collection.find()
    responce=[]
    for states in states:
        state['_id']=str(state['_id'])
        responce.append(state)
    return json.dumps(responce)



