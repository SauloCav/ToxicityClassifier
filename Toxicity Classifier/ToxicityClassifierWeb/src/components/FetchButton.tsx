// FetchButton.tsx
import React from 'react';

interface FetchButtonProps {
  onClick: () => void;
  loading: boolean;
}

const FetchButton: React.FC<FetchButtonProps> = ({ onClick, loading }) => {
  return (
    <button onClick={onClick} disabled={loading}>
      {loading ? "Loading..." : "Get Comments and Analyze Toxicity"}
    </button>
  );
}

export default FetchButton;
