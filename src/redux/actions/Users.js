import {FETCH_USERS, RECEIVED_USERS, REJECTED_USERS} from "../constants/Users";

export const onFetchUsers = (users) => {
    return {
        type: RECEIVED_USERS,
        users
    };
}

export const fetchUsers = () => {
    return {
        type: FETCH_USERS,
    };
}

export const onRejectUsers = (message) => {
    return {
        type: REJECTED_USERS,
        message
    };
}