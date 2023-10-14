// URLInput.tsx
import React from 'react';
import './URLInput.css'; // Importando o arquivo CSS

interface URLInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const URLInput: React.FC<URLInputProps> = ({ value, onChange }) => {
  return (
    <input
      className="url-input" // Aplicando a classe
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Digite a URL do post"
    />
  );
}

export default URLInput;
