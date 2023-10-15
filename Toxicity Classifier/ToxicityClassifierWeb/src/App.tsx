import React, { useState } from 'react';
import './App.css';
import CommentList from './components/CommentList/CommentList';
import URLInput from './components/URLInput/URLInput';
import FetchButton from './components/FetchButton/FetchButton';
import background from './assets/videos/background.mp4'

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

      setComments(toxicityData.predictions);
    } catch (error) {
      console.error("An error occurred", error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <video autoPlay loop muted className="video-background">
        <source src={background} type="video/mp4" />
      </video>

      <div className="App">
        <div className="input-section">
          <URLInput 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
          />
          <FetchButton 
            onClick={fetchComments} 
            loading={loading} 
          />
          {comments.length > 0 && <CommentList comments={comments} />}
        </div>
      </div>
    </div>
  );
}

export default App;
