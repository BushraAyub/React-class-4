import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Button,Card,
    CardBody,
    CardImage,
    CardTitle,
    CardText,
    CardSubtitle } from "reactstrap";


function App() {
  const [value , setValue]= useState ( [] );
  const [name , setName]= useState (" ");
  function changeState () {
    let copyState = [...value];
    copyState.push (name);
    setValue (copyState);
  }
  console.log(name);
  return (
    <>
  
    <input
    name = "name"
    value = {name}
    onChange ={(e) => setName (e.target.value)}
    />

     <Button color="primary" size="lg" block onClick = { (e)=> changeState (e.target.value) }>
     Press me to change state...
     </Button>

     {value.map((val) => { 
       return  <h1> {val} </h1>
     })}
    </>
  );
}

    
export default App;
