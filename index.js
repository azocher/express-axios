// import express
const express = require('express')
// import axios
const axios = require('axios')
// define port 
const PORT = 3000

// declare an instance of app
const app = express()

// create a home route
app.get('/', (req, res) => {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=')
        .then((resFromAPI) => {
            console.log(resFromAPI.data.Production)
            res.send(resFromAPI.data.Production)
        })
        .catch(err => {console.log(err)})
})

// open up a port for the app to listen on
app.listen(PORT, () => {
    console.log("Welcome to our very very very basic movie app 🎬")
})