import artirstService from './api/artists.services'

console.log("Loading...")

artirstService.getTracks("Believe")
    .then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })