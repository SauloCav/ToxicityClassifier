import React from 'react';
import './FetchButton.css';

interface FetchButtonProps {
  onClick: () => void;
  loading: boolean;
}

const FetchButton: React.FC<FetchButtonProps> = ({ onClick, loading }) => {
  return (
    <button 
      className="fetch-button"
      onClick={onClick} 
      disabled={loading}
    >
      {loading ? "Loading..." : "Analisar"}
    </button>
  );
}

export default FetchButton;
