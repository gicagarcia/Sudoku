import React, {useState} from 'react';
import Board from './Board';
import axios from 'axios';

const Game = ({ sudokuBoard, setSudokuBoard, onCellChange }) => {
    const [solution, setSolution] = useState([]);

    const generateNewSudokuBoard = async () => {
        try {
        const response = await axios.get('http://localhost:5000/sudoku');
        setSudokuBoard(response.data.sudokuBoard);
        setSolution(response.data.solution);
        } catch (error) {
        console.error('Erro ao gerar novo jogo de Sudoku:', error);
        }
    };

    const handleFinishGame = () => {
        const isSolved = isSudokuSolved(sudokuBoard, solution);

        if(isSolved){
            alert('Jogo finalizado com sucesso!');
        }else{
            alert('Jogo não finalizado. Tente novamente.');
        }
      };

    const isSudokuSolved = (board, solution) => {  
        if (!board || !solution || board.length === 0 || solution.length === 0) {
            return false;
          }

        for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== solution[i][j]) {
              return false;
            }
          }
        }
        return true;
      };

    return (
        <div>
        <h1>Tabuleiro de Sudoku</h1>
        <Board sudokuBoard={sudokuBoard} onCellChange={onCellChange} />
        <button onClick={handleFinishGame}>Finalizar Jogo</button>
        <button onClick={generateNewSudokuBoard}>Novo Jogo</button>
        </div>
    );
};

export default Game;
