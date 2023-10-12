from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import tensorflow as tf
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

model = load_model('../ia/models/my_toxic_model.h5')

loaded_vectorizer_model = tf.saved_model.load('../ia/models/my_vectorizer')

def vectorize_text(text):
    return loaded_vectorizer_model([text])

@app.route('/predict', methods=['POST'])
def predict():

    data = request.json
    text = data['text']

    input_text = vectorize_text(text)
    predictions = model.predict(input_text)

    return jsonify({'prediction': predictions.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
