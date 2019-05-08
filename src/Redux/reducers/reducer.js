const initialState = {
    user:null
}

export const actionTypes = {

    ADD_USERLOGIN: 'user->LOGIN',
    

}
export default (state=initialState,action)=>{

    if(action.type === actionTypes.ADD_USERLOGIN){
        return {
            ...state,
            user:action.user
        }
    }    
    return state

};