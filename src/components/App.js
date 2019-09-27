import React from 'react';
import ToDoItem from './ToDoItem.js'
import todosData from './todosData.js'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
  }

  render(){
    const todoItems = this.state.todos.map(item => 
      <ToDoItem key={item.id} item={item}/>)
  
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }


}



export default App