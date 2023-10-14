import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch(import.meta.env.VITE_REACT_APP_URL_API_COMMENTS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Assuming each comment is a string. Adjust if your API returns a different structure.
      const texts = data.map((comment: any) => comment.comment); 

      const toxicityResponse = await fetch(import.meta.env.VITE_REACT_APP_URL_API_AI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ texts }),
      });

      const toxicityData = await toxicityResponse.json();

      if (toxicityData.error) {
        throw new Error(toxicityData.error);
      }

      setComments(toxicityData.predictions);  // Assuming this returns a list of objects {text, prediction}
    } catch (error) {
      console.error("An error occurred", error);
      // Handle/display error to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter Reddit post URL"
      />
      <button onClick={fetchComments} disabled={loading}>
        {loading ? "Loading..." : "Get Comments and Analyze Toxicity"}
      </button>

      {comments.length > 0 && (
        <div>
          {comments.map((item, index) => (
            <div key={index}>
              <p>{item.text}</p>
              {item.prediction}
              <p>Is Toxic: {item.prediction[0] > 0.5 ? "Yes" : "No"}</p> {/* Adjust based on how your model returns predictions */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
