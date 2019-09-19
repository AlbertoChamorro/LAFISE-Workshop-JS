import '../styles/main.css'
import artirstService from './api/artists.services'

console.log("Loading...")

artirstService.getTracks("Believe")
    .then(response => {
        const res = response
        console.log(res)
    }).catch(error => {
        console.log(error)
    })

let newObject = Object.assign({}, {a: 1, b: 3})
console.log(newObject)