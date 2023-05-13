// import { useReducer } from "react"
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"
import { useTodo } from "../hooks/useTodo"



export const TodoApp = () => {

  // Creamos la instancia del reducer en el nivel mas alto
  // Como necesitaremos un lugar para manejar
  const {todos, handleNewtodo, handleDeleteTodo, handleToggleTodo,} = useTodo();

  

  return (
    <>
        <h1>Aqui es la pagina principal</h1>

        {/* Crearemos un formulario para agregar los elementos */}

        <TodoForm
          onNewTodo={ handleNewtodo }
        />

        {/* Crearemos un Componete que tenga la lista de los elementos que vayamos agregando  */}
        <TodoList
          todos={ todos }
          onDeleteTodo={ handleDeleteTodo }
          onToggleTodo={ handleToggleTodo }

        />



    </>
  )
}
