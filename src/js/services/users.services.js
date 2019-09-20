import { CONFIG } from '../config/config'

const findSearchUsersAction = "search/users"
const findUsersAction = "users"

function getUsers(search) {
    const searchUsersUri = `${CONFIG.BASE_URL}/${findSearchUsersAction}?q=${search}`
    const usersUri = `${CONFIG.BASE_URL}/${findUsersAction}`

    var endPoint = search.trim() ? searchUsersUri : usersUri
    return fetch(endPoint)
        .then(res => res.json())
}

export default {
    getUsers
}