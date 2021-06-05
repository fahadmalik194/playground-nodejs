const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=14e241260cc2471399e2ad2e87c4e999&query=40,-75&units=f'

const request =  http.request(url, (response) => {

    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    }) //function that allows us to register a handler

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()