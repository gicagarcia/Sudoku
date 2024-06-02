// Board.jsx
import React from 'react';
import Cell from './Cell';

const Board = ({ sudokuBoard, onCellChange }) => {
  return (
    <div className="sudoku-board">
      {sudokuBoard.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((value, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={value}
              onChange={onCellChange}
              rowIndex={rowIndex}
              colIndex={colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
