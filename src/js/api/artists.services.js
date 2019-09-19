import config from './config'
const { apiKey } = config

const BASE_URL = 'http://ws.audioscrobbler.com/2.0/'

function getTracks(track) {
    const endPoint = `${BASE_URL}?method=track.search&track=${track}&${commonHeaders()}`

    return fetch(endPoint)
        .then(res => res.json())
        //.then(json => json.topartists.artist)
}

function commonHeaders() {
    return `api_key=${apiKey}&format=json`
}

export default {
    getTracks
}