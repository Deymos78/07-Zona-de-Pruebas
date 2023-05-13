import React from "react"
import { TodoItemList } from "./TodoItemList"


// AQUI MOSTRAREMOS LA LISTA DE LOS ELEMENTOS DEL FORMULARIO
export const TodoList = ({todos, onDeleteTodo, onToggleTodo }) => {
  
  return (
    <>
        <h1>Aqui estara la lista de los elementos</h1>


        <ul >
          {
            todos.map(todo =>(
              <TodoItemList
                key={ todo.id }
                todo={ todo }
                onDeleteTodo={ onDeleteTodo }
                onToggleTodo={ onToggleTodo }
              />
            ))
          }

        </ul>


    
    </>
  )
}
