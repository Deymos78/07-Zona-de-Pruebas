import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"



export const TodoApp = () => {

  // Creamos la instancia del reducer en el nivel mas alto
  // Como necesitaremos un lugar para manejar

  return (
    <>
        <h1>Aqui es la pagina principal</h1>

        {/* Crearemos un formulario para agregar los elementos */}

        <TodoForm/>

        {/* Crearemos un Componete que tenga la lista de los elementos que vayamos agregando  */}
        <TodoList/>

        
        
    </>
  )
}
