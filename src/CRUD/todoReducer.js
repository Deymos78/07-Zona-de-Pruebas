// UN REDUCER NO ES MAS QUE UNA FUNCION
// Un reducer siempre recibira dos argumentos, el estado y la accion
export const todoReducer = ( initialState=[], action) => {

    // Se suele usar un switch para las acciones que se quieran realizar
    switch ( action.type ) {
        case '[TODO] Add Todo':
            // El payload son los datos que se envian a traves de una accion a un reducer
            return[...initialState, action.payload];
    
        default:
            return initialState;
    }
}
