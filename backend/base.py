from flask import Flask, request, send_from_directory
from flask_cors import CORS
import zmq
import time
import os
import json

app = Flask(__name__)
CORS(app)

@app.route('/result', methods=['GET', 'POST'])
def result():
    if request.method == 'POST':
        # send name of the food
        food = request.form["food"]
        print(food)
        if food:
            nutrient = get_nutrient(food)   
            return nutrient  
        return "No food provided."

def get_nutrient(food):
    context = zmq.Context()
    socket = context.socket(zmq.REQ)
    socket.connect("tcp://localhost:5557")

    socket.send(food.encode('utf-8'))
    time.sleep(1.0)
    # print the returned nutrients information
    response = json.loads(socket.recv().decode("utf-8")) # {"protein": 23.9, "calcium": 12, "iron": 0.94} 
    nutrient = "It has " + str(response["protein"]) + "g protein, " + str(response["calcium"]) + "mg calcium and " + str(response["iron"]) + "mg iron."
    return nutrient

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')