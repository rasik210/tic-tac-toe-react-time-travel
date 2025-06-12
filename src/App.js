import './App.css';
import React from 'react'

export default function App() {
  return (
        <div className="App">
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
      <table>
        <tbody>
          <tr>
            <td><Square value={props.boardState[0]}></Square></td>
            <td><Square value={props.boardState[1]}></Square></td>
            <td><Square value={props.boardState[2]}></Square></td>
          </tr>
          <tr>
            <td><Square value={props.boardState[3]}></Square></td>
            <td><Square value={props.boardState[4]}></Square></td>
            <td><Square value={props.boardState[5]}></Square></td>
          </tr>
          <tr>
            <td><Square value={props.boardState[6]}></Square></td>
            <td><Square value={props.boardState[7]}></Square></td>
            <td><Square value={props.boardState[8]}></Square></td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}

function Square(props){
  return ( <input type="text" value={props.value} />)
}