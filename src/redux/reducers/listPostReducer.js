import { actionTypes } from "../actions/actionTypes";


const initState = {
    id: null
}

const listPostReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_LIST:
            return {
                ...state,
                id: action.id
            }
        default:
            return state;
    }
}


export default listPostReducer

