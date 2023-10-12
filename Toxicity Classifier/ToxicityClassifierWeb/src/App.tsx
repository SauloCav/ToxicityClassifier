import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('http://localhost:5000/predict', { text });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div>
      <h1>Toxicity Predictor</h1>
      <textarea value={text} onChange={handleTextChange} />
      <button onClick={handleSubmit}>Predict</button>
      {prediction && (
        <div>
          <h2>Prediction</h2>
          <pre>{JSON.stringify(prediction, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
