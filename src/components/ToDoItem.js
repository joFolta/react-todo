import React from "react"

function ToDoItem(props){
    // console.log(props.item.text)
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => alert("Changed...in theory")}
                ></input>
            <p>{props.item.text}</p>
        </div>
    )
}

export default ToDoItem