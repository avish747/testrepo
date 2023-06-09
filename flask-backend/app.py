from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
app = Flask(__name__)
#app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, allow_headers=['Content-Type', 'Access-Control-Allow-Origin',
                         'Access-Control-Allow-Headers', 'Access-Control-Allow-Methods'])

@app.route('/', methods=['GET'])
@cross_origin()
def hello_world():
    return jsonify({'message': 'Hi Team'})

if __name__ == '__main__':
    app.run(debug=True)
