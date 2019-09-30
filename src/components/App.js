import React from 'react';
import ToDoItem from './ToDoItem.js'
import todosData from './todosData.js'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    console.log("works",id)
    this.setState(prevState => {
      const newToDosData = prevState.todos.map((todo) => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: newToDosData
      }
    })
  }

  render(){
    const todoItems = this.state.todos.map(item => 
      <ToDoItem 
        key={item.id} 
        item={item}
        handleChange={this.handleChange}/>)
  
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }


}



export default App