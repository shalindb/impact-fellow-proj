# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask
from flask_cors import CORS
import pandas as pd

# Flask constructor takes the name of
# current module (__name__) as argument.
app = Flask(__name__)
CORS(app)
# main driver function
@app.route('/')
def homepage():
    return 'hello world'
# Route for seeing a data
@app.route('/data')
def get_time():
    data = pd.read_csv("./jobs_database.csv")

    return data.to_json()
  
    # Returning an api for showing in  reactjs
if __name__ == '__main__':
# run() method of Flask class runs the application
# on the local development server.
    app.run(debug=True, host='localhost', port=9820)
