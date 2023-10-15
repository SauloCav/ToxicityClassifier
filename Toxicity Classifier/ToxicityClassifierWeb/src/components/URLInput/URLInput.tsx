import React from 'react';
import './URLInput.css';

interface URLInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const URLInput: React.FC<URLInputProps> = ({ value, onChange }) => {
  return (
    <input
      className="url-input" 
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Digite a URL do post"
    />
  );
}

export default URLInput;
