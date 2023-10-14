from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import tensorflow as tf
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = load_model('../models/my_toxic_model.h5')
loaded_vectorizer_model = tf.saved_model.load('../models/my_vectorizer')

def vectorize_text(text):
    return loaded_vectorizer_model([text])

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    texts = data.get('texts', [])  # expects a key 'texts' with a list of strings as the value

    # Check if texts is a list
    if not isinstance(texts, list):
        return jsonify({'error': 'Input data should be a list of strings'}), 400

    response_data = {'predictions': []}

    for text in texts:
        # Vectorize the current text
        input_text = vectorize_text(text)
        # Make prediction
        prediction = model.predict(input_text)
        # Append the prediction to our response
        response_data['predictions'].append({
            'text': text,
            'prediction': prediction.tolist()
        })

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
