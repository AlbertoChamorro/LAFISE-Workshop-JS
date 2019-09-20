// styles
import "../styles/main.css"

// services
import usersServices from './services/users.services'

let search = "Alberto Chamorro"
usersServices.getUsers(search)
    .then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })