// import express
const express = require('express')
// import axios
const axios = require('axios')
// import and config dotenv library
require('dotenv').config()
// define port 
const PORT = 3000
// define API key var
const omdbApiKey = process.env.OMDB_API_KEY

// declare an instance of app
const app = express()

// create a home route
app.get('/', (req, res) => {
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${omdbApiKey}`)
        .then((resFromAPI) => {
            console.log(resFromAPI.data.Title)
            res.send(resFromAPI.data.Title)
        })
        .catch(err => {console.log(err)})
})

// open up a port for the app to listen on
app.listen(PORT, () => {
    console.log("Welcome to our very very very basic movie app 🎬")
})