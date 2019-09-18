import artirstService from './api/artists.services'

console.log("Loading...")

artirstService.getAll("Believe")
    .then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })