// Comment.tsx
import React, { useState } from 'react';
import './Comment.css'; // <- Certifique-se de importar o arquivo de estilos
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

  const predictions = prediction.toString().split(',');
  const isOffensive = Number(predictions[0]) > 0.5;

  return (
    <div className="comment-section">
      <p className="comment-text">{text}</p>
      <p className="offensive-indicator">
        <span className={isOffensive ? 'yes-text' : 'no-text'}>
          {isOffensive ? "Trata-se de um comentário ofensivo" : "Não trata-se de um comentário ofensivo"}
        </span>
      </p>
      <button className="show-predictions-button" onClick={handleShowPopup}>Detalhes</button>
      <PredictionPopup 
        show={showPopup} 
        onClose={handleClosePopup} 
        predictions={predictions} 
      />
    </div>
  );
}

export default Comment;
