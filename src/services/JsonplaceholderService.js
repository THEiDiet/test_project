import fetch from "../auth/FetchInterceptor";

const jsonPlaceholderService = {}

jsonPlaceholderService.fetchUsers = () => {
    return  fetch({
        url: 'users',
        method: 'get',
    })
}

export default jsonPlaceholderService