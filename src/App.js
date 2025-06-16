import './App.css';
import React from 'react'

export default function App() {
  return (
        <div>
          <h1>
            Tic Tac Toe - Let's Begin
          </h1>
          <Game></Game>
        </div>
  );
}

function Game(){
const squareValues = [null,null,null,null,null,null,null,null,null];
return (<Board className="Board" boardState={squareValues}></Board>)
}

function Board(props) {
  return (
    <React.Fragment>
      <div className="table">
        <div className="row"> 
          <Square value={props.boardState[0]}></Square>
          <Square value={props.boardState[1]}></Square>
          <Square value={props.boardState[2]}></Square>
        </div>
        <div className="row"> 
          <Square value={props.boardState[3]}></Square>
          <Square value={props.boardState[4]}></Square>
          <Square value={props.boardState[5]}></Square>
        </div>
        <div className="row"> 
          <Square value={props.boardState[6]}></Square>
          <Square value={props.boardState[7]}></Square>
          <Square value={props.boardState[8]}></Square>
        </div>
      </div>
    </React.Fragment>
  )
}

function Square(props){
  return ( <button>{props.value}</button>)
}