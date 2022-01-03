fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))
// Retorna uma Promise

fetch('https://url.com/', {
    method: 'GET',
    cache: 'no-cache'
})
    .then(response => response.json())
    .then(json => console.log(json))
// Retorna uma Promise

fetch('https://url.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(json => console.log(json))
// Retorna uma Promise