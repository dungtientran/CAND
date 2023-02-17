import { actionTypes } from "./actionTypes"


export const listPostAction = (id) => {
    return {
        type: actionTypes.GET_LIST,
        id: id
    }
}