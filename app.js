// Node Module
const request = require('../node_modules/request-promise');

const dictionary = {
    "github": "https://github.com/christianguerrero03/Code2040",
    "token": "2e29c6f4b93c01b6e29f2bf27cfe8cef",
}

const options = {
    method: 'POST',
    uri: 'http://challenge.code2040.org/api/register',
    body: dictionary,
    json: true
}

// Request
request(options)
    .then(response => {
        console.log(response)
    })
    .catch(error = > {
        console.log(error)
    })
