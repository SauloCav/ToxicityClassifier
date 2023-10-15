import React from 'react';
import './PredictionPopup.css';

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
          <h2 className="popup-text-h2">Detalhes da análise</h2>
        </div>
        <div className="popup-predictions">
          {predictions.map((prediction, index) => (
            <p className="popup-text" key={index}>
              <span className="type-text">{types[index]}</span>: 
              <span className={parseFloat(prediction) >= 0.5 ? "prediction-high" : "prediction-low"}>
                {parseFloat(prediction) >= 0.5 ? " Sim" : " Não"}
              </span>
            </p>
          ))}
        </div>

        <button className="popup-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PredictionPopup;
