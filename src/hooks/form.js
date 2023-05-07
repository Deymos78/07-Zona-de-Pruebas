import {useState} from "react";



export const useForm = (initialForm = {}) => {


    const [formState, setFormState] = useState( initialForm );



    // Creamos una funciona para cuando el estado del formulario cambie
    // Resivimos el evento  
    const onInputChange = ({ target }) => {

        // Desestructuramos el nombre y el valor del evento
        const {name, value} = target;

        // Desestructuramos el setFormState 
        // Colocamos el nombre y el valor,
        setFormState({
            ...setFormState,
            [name]: value,
        })

    }

    // Creamos una funcion para resetear el formulario cuando se llame a la funcion
    // Como esta funcion se llama al momento de Resetear el formulario
    const onResetForm = () => {
        // Cambiamos el estado del formulario 
        setFormState( initialForm );
    }


    return {
        ...formState,
        onResetForm,
        onInputChange,

    }

  
}
