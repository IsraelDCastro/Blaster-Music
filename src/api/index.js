// import config from './config'
//
// const { apiKey } = config
const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=05453262c8baf0522f94026cf130e946&format=json'

export default function getArtists(country) {
  const url = URL.replace(':country', country)
  return fetch(url)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}
