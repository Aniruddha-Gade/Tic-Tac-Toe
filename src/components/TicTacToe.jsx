import React, { useState } from 'react';
import GameBoard from './GameBoard';


const TicTacToe = () => {

    const initialBoard = Array(9).fill(null);

    const [board, setBoard] = useState(initialBoard);
    const [winner, setWinner] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winningCells, setWinningCells] = useState([]);


    const handleCellClick = (index) => {
        // if already click or there is winner then return 
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        // checkWinner(newBoard);
        checkWinner(newBoard);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }


    const checkWinner = (board) => {
        const winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let condition of winningConditions) {
            const [a, b, c] = condition;

            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                setWinningCells([a, b, c]);

                return;
            }

            if (board.every((cell) => cell !== null))
                setWinner('Draw')
        }
    }



    const resetGame = () => {
        setBoard(initialBoard);
        setWinningCells([]);
        setWinner(null);
        setCurrentPlayer('X');
    }

    return (
        <div>
            <h1 className='font-bold text-[#ff5722] text-4xl text-center' >
                Tic <span className='text-[#2196f3]'>Tac</span> Toe</h1>

            <GameBoard board={board} currentPlayer={currentPlayer} winner={winner}
                winningCells={winningCells} resetGame={resetGame} handleCellClick={handleCellClick}
            />
        </div>

    )
}

export default TicTacToe;
