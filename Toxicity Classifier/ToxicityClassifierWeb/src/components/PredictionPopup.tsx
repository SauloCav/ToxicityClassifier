// PredictionPopup.tsx
import React from 'react';
import './PredictionPopup.css'; // Don't forget to import your CSS file

interface PredictionPopupProps {
  show: boolean;
  onClose: () => void;
  predictions: Array<string>;
}

const PredictionPopup: React.FC<PredictionPopupProps> = ({ show, onClose, predictions }) => {
  const popupClasses = `popup-backdrop${show ? ' open' : ''}`;
  const types: Array<string> = ['Tóxico', 'Severamente tóxico', 'Obsceno', 'Ameaça', 'Insulto', 'ódio baseado em identidade'];

  return (
    <div className={popupClasses}>
      <div className="popup-content">
        <div className="popup-header">
          <h2 className="popup-text">Detalhes da análise</h2>
        </div>
        <div className="popup-predictions">
          {predictions.map((prediction, index) => (
            <p className="popup-text" key={index}>{types[index]}: {prediction}</p>
          ))}
        </div>
        <button className="popup-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PredictionPopup;
