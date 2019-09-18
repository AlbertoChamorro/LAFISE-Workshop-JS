import config from './config'
const { apiKey } = config

const BASE_URL = 'http://ws.audioscrobbler.com/2.0/'
const restService = 'json'

function getTracks(track) {
    const actionName = 'track.search'
    const endPoint = `${BASE_URL}?method=${actionName}${commonHeaders}&track=${track}`

    return fetch(endPoint)
        .then(res => res.json())
        //.then(json => json.topartists.artist)
}

function commonHeaders() {
    return `&api_key=${apiKey}&format=${restService}`
}

export default {
    getAll
}