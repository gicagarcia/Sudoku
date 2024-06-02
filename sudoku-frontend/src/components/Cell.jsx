// Cell.jsx
import React from 'react';

const Cell = ({ value, onChange, rowIndex, colIndex }) => {
  const handleChange = (e) => {
    // Adicione lógica de validação, se necessário
    onChange(rowIndex, colIndex, e.target.value);
  };

  return (
    <input
      type="number"
      className="sudoku-cell"
      value={value !== 0 ? value : ''}
      onChange={handleChange}
      min="1"
      max="9"
    />
  );
};

export default Cell;
