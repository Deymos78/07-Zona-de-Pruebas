// UN REDUCER NO ES MAS QUE UNA FUNCION
// Un reducer siempre recibira dos argumentos, el estado y la accion
// El estado inicial se recibe por parte de react, pero en este caso asignamos un array vacio en el caso de que no recibamos nada
// El action es un objeto del cual recuperaremos el tipo de accion que se debera realizar
export const todoReducer = ( initialState=[], action) => {

    // Se suele usar un switch para las acciones que se quieran realizar
    // Obtenemos el type del action
    switch ( action.type ) {
        case '[TODO] Add Todo':
            // El payload son los datos que se envian a traves de una accion a un reducer
            // Atraves del spread nos permite descomponer el estado y agregarle un nuevo elemento a este concatenandolo al final de la lista
            return[...initialState, action.payload];

        case '[TODO] Remove Todo':

            return initialState.filter( todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':

            
            return initialState.map( todo =>{

                if(todo.id == action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })

    
        default:
            return initialState;
    }
}
