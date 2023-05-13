import { useForm } from "../hooks/useForm"

// AQUI HAREMOS LA INTRODUCCION DE LOS NUEVOS ELEMENTOS
export const TodoForm = ({onNewTodo}) => {

  // Creamos una instancia del hook useForm donde le pasamos un objeto con los valores vacios y con las 
  // propiedades nombre e email
  const {nombre, formState, onResetForm, onInputChange} = useForm({
     nombre: '',
    });

     // Creamos una funcion que se ejecute cuando el formulario se envie
     // Accedemos al evento del formulario y de el obtendremos lo que necesitamos
     const onFormSubmit  = (event) => {

      // Lo primero que hacemos es evitar que la pagina se recarge, ya que es el comportamiento por defecto que se realiza
      event.preventDefault();

      // Comprobamos que los datos introducidos no sean nulo o que sean mayor a un caracter
      if( nombre.length  <= 1) return;
      
      // El nuevo Todo que vamos a crear sera un objeto 
      const newTodo ={
        id: new Date().getTime(),
        done: false,
        nombre: nombre
      }

      onNewTodo(newTodo);
      onResetForm();


     }

  return (
    <>
        <h1>Aqui estara el formulario</h1>
        
        {/* Creamos el formulario donde introduciremos los inputs junto a un boton que enviara el formulario */}
          <form onSubmit={ onFormSubmit }>
            <input 
            // Especificamos el tipo de texto
              type="text"
              // El atributo name sirve para asociar un nombre a los datos que se envian al servidor cuando se envia un formulario
              // los datos se envian a un servidor en formato de pares "clave-valor"
              name="nombre" 
              // El value es el valor del input que se puede visualizar por el usuario y es el valor que se envia al servidor cuando se envia
              value={nombre}
              placeholder="Escriba su nombre"
              onChange={ onInputChange }
            />

          
            <button
              type="submit"
              className="btn btn-primary"
            >
              Agregar
            </button>
         
          </form>

    </>
  )
}
