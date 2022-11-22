from flask import Flask, request
from flask_cors import CORS
import zmq
import time
import os
import json

app = Flask(__name__)
CORS(app)
res = {}

@app.route('/result', methods=['POST'])
def post():
    if request.method == 'POST':
        u_input = request.form.to_dict(flat=False)
        for food in u_input: 
            name = food.strip('"')
            if name:
                result = get_nutrient(name)   
                print(result)
            else:
                result = "No food provided." 
            res["result"] = result
            return {"status": "success"}

@app.route('/')
def get():
    time.sleep(2.0)
    return res

def get_nutrient(food):
    context = zmq.Context()
    socket = context.socket(zmq.REQ)
    socket.connect("tcp://localhost:5557")
    socket.send(food.encode('utf-8'))
    response = json.loads(socket.recv().decode("utf-8")) 
    if response is None:
         result = "Sorry we didn't find this food. Please try another food."
    else:
        result = "It has " + str(response["protein"]) + "g protein, " + str(response["calcium"]) + "mg calcium and " + str(response["iron"]) + "mg iron, for a portion of 100g."
    return result

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')