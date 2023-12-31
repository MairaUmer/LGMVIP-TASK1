
import React, { useState } from 'react';
import TodoList from './TodoList';
// import './App.css'


const App = () =>{

const[inputList, setInputList] = useState("Buy Apple");
const[Items, setItems] = useState([]);

const itemEvent = (event) =>{
  setInputList(event.target.value);
};

const listOfItems = () =>{
setItems((oldItems) => {
return[...oldItems, inputList]
});

setInputList(" ")
};

const deleteItems = (id) => {
  console.log('deleted')

  setItems ((oldItems) =>{
    return oldItems.filter((arrElem, index) =>{
    return index !== id;
    })
  })
}


  return(
<div className="main_div">
  <div className="center_div">
    <br />
    <h1>ToDo List</h1>
    <br />
    <input type="text"  placeholder='Add a Items' onChange={itemEvent}/>

    <button onClick={listOfItems}> + </button>

    <ol>
     {/* { <li>Buy Mango</li>} */}
     {
      Items.map( (itemval, index) =>{
      return <TodoList 
      key={index} 
      id={index} 
      text={itemval}
      onSelect={deleteItems}
      />
      })}
    </ol>
  </div>
</div>

  ) 
  
}
 

export default App




