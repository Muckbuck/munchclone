
//A simple get request using es6 fetch()  
export function apiRequest(url,method, token, cors = true, body = null) {
  // Default options are marked with *
  const mode = (cors ? 'corse' : 'no-corse');
  return fetch(url, {
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json',
      'AUTHORIZATION': token
    },
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: mode, // no-cors, cors, *same-origin
    redirect: 'follow', // *manual, follow, error
    referrer: 'no-referrer', // *client, no-referrer
    body: body,
  })
  .then(function(data){
    return data.json()
  }) // parses response to JSON
   // JSON from `response.json()` call
  .catch(error => console.error(error))
}



