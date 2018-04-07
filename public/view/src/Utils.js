
//A simple get request using es6 fetch()  
export function apiRequest(url,method) {
  // Default options are marked with *
  return fetch(url, {
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json',
    },
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // *manual, follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(function(data){
    return data.json()
  }) // parses response to JSON
   // JSON from `response.json()` call
  .catch(error => console.error(error))
}


export const debugTool = {
  log: function(data){
    console.log(data)
  }
}