import React from 'react';
import './App.css';
import Items from './Items.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.change = this.change.bind(this);
    this.add = this.add.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeItemValue = this.changeItemValue.bind(this);
  }
  render() {
    return(
      <div>
        <header>
          <h1>To Do List:</h1>
          <form id = "thingToDo" onSubmit = {this.add}>
          <input type = "text" placeholder = "Enter New Item"
          value = {this.state.currentItem.text}
          onChange = {this.change}
          />
          <button type = "submit">Add Item</button>
          </form>
        </header>
        <Items items = {this.state.items} deleteItem = {this.deleteItem} changeItemValue = {this.changeItemValue}></Items>
      </div>
    );
  }

  changeItemValue(data, key) {
    const list = this.state.items;
    list.map(item => {      
      if(item.key === key){
        item.text= data;
      }
      
    })
    this.setState({
      items: list
    })
  }

  change(i) {
    this.setState({
      currentItem:{
        text: i.target.value,
        key: Date.now() 
      }
    })
  }
  add(i) {
    i.preventDefault();
    const newTask = this.state.currentItem;

    if(newTask.text !==""){
      const items = [...this.state.items, newTask];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  deleteItem(key){
    const matches= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: matches
    })

  }
}

export default App;
