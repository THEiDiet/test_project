import {RECEIVED_USERS, REJECTED_USERS} from "../constants/Users";

const initialState = {
    users:[],
    errors:''
}

 const Users = (state = initialState,action)=>{
    switch (action.type){
        case RECEIVED_USERS:
            return {...state,users: action.users}
        case REJECTED_USERS:
            return {...state,errors:action.message}
        default:
            return state
    }
}

export default Users