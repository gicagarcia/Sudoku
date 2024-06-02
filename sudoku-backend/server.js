const AuthService = require('./AuthService.js');

const express = require('express');
const cors = require('cors');
const sudoku = require('sudoku');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

app.post('/registro', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    if (!username || !password) {
        return res.status(400).json({ error: 'Os campos "username" e "password" são obrigatórios.' });
    }
    
    try {
      AuthService.register(username, password);
      res.status(201).json({ message: 'Usuário registrado com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const isAuthenticated = AuthService.login(username, password);
    if (isAuthenticated) {
        res.json({ message: 'Usuário autenticado com sucesso.' });
    } else {
        res.status(401).json({ error: 'Credenciais inválidas.' });
    }
  });

app.get('/sudoku', (req, res) => {
    const puzzle = sudoku.makepuzzle();
    const solution = sudoku.solvepuzzle(puzzle);
    
    const sudokuBoard = [];
    for (let i = 0; i < 9; i++) {
        sudokuBoard.push(puzzle.slice(i * 9, (i + 1) * 9).map(value => (value === null ? '' : value + 1)));
    }

    const sudokuSolution = [];
    for (let i = 0; i < 9; i++) {
        sudokuSolution.push(solution.slice(i * 9, (i + 1) * 9).map(value => (value === null ? '' : value + 1)));
    }
  
    res.json({ sudokuBoard, sudokuSolution });
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
