import React from 'react';
import './Add.css';
import Items from './Items.js';

class Add extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }

  }
  render() {
    return(
      <div>
        <header>
          <form id = "thingToDo" onSubmit = {this.add}>
          <button type = "submit">Add Item</button>
          </form>
        </header>
      </div>
    );
  }

}

export default Add;
