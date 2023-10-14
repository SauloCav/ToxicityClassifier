// FetchButton.tsx
import React from 'react';
import './FetchButton.css'; // <- Não esqueça de importar o arquivo de estilos

interface FetchButtonProps {
  onClick: () => void;
  loading: boolean;
}

const FetchButton: React.FC<FetchButtonProps> = ({ onClick, loading }) => {
  return (
    <button 
      className="fetch-button"  // <- Aplicar a classe aqui
      onClick={onClick} 
      disabled={loading}
    >
      {loading ? "Loading..." : "Analisar"}
    </button>
  );
}

export default FetchButton;
