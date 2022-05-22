from crypt import methods
from flask import Flask,request
from flask_cors import CORS, cross_origin

from sum import summ
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/",methods=["POST"])
@cross_origin()
def summarize():
    text = request.data.decode('utf-8')
    return summ(text)