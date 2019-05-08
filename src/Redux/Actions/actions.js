import {actionTypes} from '../Reducers/todos';

export const addUserLogin =(user)=>{

    return{
        type:actionTypes.ADD_USERLOGIN,
        user:user
    }
}