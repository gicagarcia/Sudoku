// ParentComponent.jsx
import React, { useState } from 'react';
import Game from './Game';
import axios from 'axios';

const ParentComponent = () => {
  const [sudokuBoard, setSudokuBoard] = useState([]);

  const handleCellChange = (rowIndex, colIndex, newValue) => {
    const updatedBoard = sudokuBoard.map((row, rIndex) => {
      if (rIndex === rowIndex) {
        return row.map((cell, cIndex) => {
          if (cIndex === colIndex) {
            return newValue;
          }
          return cell;
        });
      }
      return row;
    });
    setSudokuBoard(updatedBoard);
  };

  const generateNewSudokuBoard = async () => {
    try {
      const response = await axios.get('http://localhost:5000/sudoku');
      setSudokuBoard(response.data.sudokuBoard);
    } catch (error) {
      console.error('Erro ao gerar novo jogo de Sudoku:', error);
    }
  };

  return (
    <div>
      <Game sudokuBoard={sudokuBoard} onCellChange={handleCellChange} generateNewSudokuBoard={generateNewSudokuBoard} setSudokuBoard={setSudokuBoard} />
    </div>
  );
};

export default ParentComponent;
