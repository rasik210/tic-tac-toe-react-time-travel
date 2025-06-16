import Square from './Square';
import React, { useState } from 'react';
import './Board.css';

export default function Board() {
  const [squares, setSquares] = useState([null,null,null,null,null,null,null,null,null]);
  const [xIsNext, setXIsNext] = useState(true);
  function handleClick(i){
    if(squares[i] != null || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    } 
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }

  function resetBoard() {
    const nextSquares = squares.slice(); 
    for (let i = 0; i < nextSquares.length; i++) {
      nextSquares[i] = null;
    }
    setSquares(nextSquares);
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  return (
    <React.Fragment>
      <h2>{status}</h2>
      <div className="table">
        <div className="row">  
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
          <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
          <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
        </div>
        <div className="row"> 
          <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
          <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
          <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
        </div>
        <div className="row"> 
          <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
          <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
          <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
        </div>
      </div>
      <div className="reset"><button  onClick={resetBoard} >Reset</button></div>
    </React.Fragment>
  )
}



function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
