// Comment.tsx
import React, { useState } from 'react';
import PredictionPopup from './PredictionPopup';

interface CommentProps {
  text: string;
  prediction: number[];
}

const Comment: React.FC<CommentProps> = ({ text, prediction }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <p>{text}</p>
      {prediction}
      <p>Is Toxic: {prediction[0] > 0.5 ? "Yes" : "No"}</p>
      <button onClick={handleShowPopup}>Show Predictions</button>
      <PredictionPopup 
        show={showPopup} 
        onClose={handleClosePopup} 
        predictions={prediction} 
      />
    </div>
  );
}

export default Comment;
