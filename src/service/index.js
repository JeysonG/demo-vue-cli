const config = require('./config');

const apiKey = config.default.apiKey;
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`;

export default function getArtist (country)  {
    const url = URL.replace(':country', country)
    return fetch(url)
    .then(response => response.json())
    .then(json => json.topartists.artist)

}