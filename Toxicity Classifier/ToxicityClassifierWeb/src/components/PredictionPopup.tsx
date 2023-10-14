// PredictionPopup.tsx
import React from 'react';
import './PredictionPopup.css'; // Don't forget to import your CSS file

interface PredictionPopupProps {
  show: boolean;
  onClose: () => void;
  predictions: number[];
}

const PredictionPopup: React.FC<PredictionPopupProps> = ({ show, onClose, predictions }) => {
  const popupClasses = `popup-backdrop${show ? ' open' : ''}`;
  const chars = predictions.toString().split(',');
  const types: Array<string> = ['Tóxico', 'Severamente tóxico', 'Obsceno', 'Ameaça', 'Insulto', 'ódio baseado em identidade'];

  return (
    <div className={popupClasses}>
      <div className="popup-content">
        <div className="popup-header">
          <h2>Predictions</h2>
        </div>
        <div className="popup-predictions">
          {chars.map((prediction, index) => (
            <p key={index}>{types[index]}: {prediction}</p>
          ))}
        </div>
        <button className="popup-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PredictionPopup;
