import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"



export const TodoApp = () => {
  return (
    <>
        <h1>Aqui es la pagina principal</h1>


        {/* Crearemos un Componete que tenga la lista de los elementos que vayamos agregando  */}
        <TodoList/>

        
        {/* Crearemos un formulario para agregar los elementos */}

        <TodoForm/>
    </>
  )
}
