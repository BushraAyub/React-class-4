import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import ListItems from './list-items';
// import Icon from './Icon.png'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

// library.add (faTrash)


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
  
 render(){
  return (
    <div className="App">
      <h1 className="hed">"To-Do-App" <br/>Add , Update , Delete <br/> Your Task Here <br/>By Using React.js</h1>
      <header>
      
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>
        <p>{this.state.items.text}</p>
        
        <ListItems
           items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}
          />
        
        
        
      </header>
    </div>
  );
 }
}

export default App;































