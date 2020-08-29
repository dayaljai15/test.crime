import sqlalchemy
import sqlite3
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, jsonify, render_template
import json

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///KC_Crime_Density.db"
db = SQLAlchemy(app)

Base = automap_base()

Base.prepare(db.engine, reflect=True)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/yearly_comparison")
def yearlyTrends():
    return render_template('/yearly_comparison.html')

@app.route("/zip_comparison")
def neighborhoodTrends():
    return render_template('/zip_comparison.html')

@app.route("/data")
def data():
    return render_template('/data.html')    

@app.route("/API_endpoint", methods=['GET'])
def index():

    data = [("Report_No","Report_Date","zip","Offense","Description","Race","Sex","Age")]
    conn = sqlite3.connect('KC_Crime_Density.db')

    cursor = conn.execute('SELECT * FROM full_crime;')
    data = cursor.fetchall()
    # print(data)

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)