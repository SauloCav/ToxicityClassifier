import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [predictions, setPredictions] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async () => {
    // Split the input text by new lines and filter out any empty lines
    const texts = inputText.split('\n').filter(text => text.length > 0);

    if (texts.length === 0) {
      alert('Please enter at least one line of text.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ texts }), // send the texts list to the API
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPredictions(data.predictions); // store the predictions in state
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Toxicity Predictor</h1>
        <textarea
          value={inputText}
          onChange={handleTextChange}
          placeholder="Enter text (one per line)"
          rows={10}
          style={{ width: '100%', marginBottom: '12px' }}
        />
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Loading...' : 'Predict Toxicity'}
        </button>
        {predictions && (
          <div>
            <h2>Predictions:</h2>
            <ul>
              {predictions.map((result: any, index: number) => (
                <li key={index}>
                  Text: {result.text} | Prediction: {result.prediction[0].join(', ')}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
