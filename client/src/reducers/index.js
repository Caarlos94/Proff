import { FILTRO } from '../actions/index'

const initialState = {
    profesores:[]
}

const reducer = (state=initialState, action) => {
switch(action.type){

    case FILTRO: 
    return { ...state, profesores: action.payload }
    
    default:
    return{...state} 
}
}

export default reducer