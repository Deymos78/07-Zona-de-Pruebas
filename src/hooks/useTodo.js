import { useEffect, useReducer } from "react"
import { todoReducer } from "../CRUD/todoReducer"


// Creamos una funcion para retornar el valor almacenado en el almacenamientoLocal que tendra un identificador de todos
const init = () => {
  // Retornaremos un Objeto JSON ya que cuando recogemos los datos almacenados en AlmacenamientoLocal seran una cadena de texto
  // y cuando hacemos el parse lo convertimos en un objeto javascript
  return JSON.parse(localStorage.getItem('todos')) || []; 
}


export const useTodo = () => {

    // Aqui inicializamos el useReducer, el primer arguemnto sera para el reducer y el segundo para la accion y el tercero es para el estado inicial
    // El useReducer retorna un array con dos valores, el estado actual(state) y la funcion dispatch permite actualziar el estado a un valor
    // diferente y activar una nueva renderizacion
    const [todos, dispatch] = useReducer(todoReducer, [], init);


    // AQUI TENDREMOS QUE CREAR EL CRUD

    // Empezamos con la accion de crear un nuevo elemento, para saber cual es el elemento que se le va a pasar tenemos que colocar un paramtro
    // el cual sera el objeto que introduciremos 
    const handleNewtodo = ( todo ) =>{

      // Aqui crearemos la accion que le vamos a pasar, puesto que la accion tiene que ser un objeto, donde se tiene que especificar el tipo de 
      // accion que se va a realizar
      const action = {
        type: '[TODO] Add Todo',
        payload: todo
      }

      // Ahora a traves de la funcion dispatch se le enviara al reducer la accion 
      dispatch( action );

    }

    // CREAMOS UNA FUNCIONA PARA ELIMINAR EL OBJETO
    // Recibiremos el id como argumento para la funcion
    const handleDeleteTodo = ( id ) => { 


      const action ={
        type: '[TODO] Remove Todo',
        payload: id
      }
      
      dispatch(action);

    }


    const handleToggleTodo = ( id ) =>{

      dispatch({
        type: '[TODO] Toggle Todo',
        payload: id
      });  

    }

    // Para evitar que nuestros datos se eliminen cada vez que se actauliza la pagina tendremos que almacenarlos en un almacenamiento local
    // Lo cocolamos dentro de un UseEffect, de esta forma solo se volvera a almacenar cuando se realize una renderizacion nueva
    // pero en nuestro caso esa renderizacion sera cada vez que se realize una accion sobre los elementos almacenados
    useEffect(() => {
      // Colocamos en el almacenamiento local los datos de todos con una clave del mismo nombre,
      // El localStorage pide dos valores, clave y valor
      localStorage.setItem('todos', JSON.stringify( todos ));
      // En el tercer argumento colocamos nuestro estado 'todos', para que se active cuando haya algun cambio en el estado
    }, [todos])
    

    // Devolveremos un objeto con la referencia de las funciones
  return {
    todos,
    handleNewtodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
}
