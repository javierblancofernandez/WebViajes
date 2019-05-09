import {actionTypes} from '../Reducer/reducer';

export const addUserLogin =(user)=>{

    return{
        type:actionTypes.ADD_USERLOGIN,
        user:user
    }
}