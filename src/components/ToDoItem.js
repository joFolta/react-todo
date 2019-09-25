import React from "react"

function ToDoItem(){
    return (
        <div className="todo-item">
            <input type="checkbox" id="box"></input>
            <label htmlFor="box">Item</label>
        </div>
    )
}

export default ToDoItem