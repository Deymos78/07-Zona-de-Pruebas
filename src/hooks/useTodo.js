import { useReducer } from "react"


export const useTodo = () => {

    // Aqui inicializamos el useReducer, el primer arguemnto sera para el reducer y el segundo para la accion y el tercero 
    const [state, dispatch] = useReducer(first, second, third)


  return (
    <div>useTodo</div>
  )
}
