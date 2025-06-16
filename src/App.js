import './App.css';
import React, { useState } from 'react';

export default function App() {
  return (
        <div>
          <h1>
            Tic Tac Toe - Let's Begin
          </h1>
          <Board></Board>
        </div>
  );
}

function Board() {
  const [squares, setSquares] = useState([null,null,null,null,null,null,null,null,null]);
  const [xIsNext, setXIsNext] = useState(true);
  function handleClick(i){
    if(squares[i] != null) {
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

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

function Square({value, onSquareClick}){
  return ( <button onClick={onSquareClick}>{value}</button>)
}