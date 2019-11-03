import pymongo
from pymongo import MongoClient

client = pymongo.MongoClient("mongodb+srv://<username>:<password>@hacktx-wugyn.azure.mongodb.net/test?retryWrites=true&w=majority")
db = client.ifReturn
