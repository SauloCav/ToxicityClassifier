// URLInput.tsx
import React from 'react';

interface URLInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const URLInput: React.FC<URLInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter Reddit post URL"
    />
  );
}

export default URLInput;
