// const express = require('express')
import express from "express";

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'First Joke',
            content: 'First joke content'
        },
        {
            id: 2,
            title: 'Second Joke',
            content: 'Second joke content'
        },
        {
            id: 3,
            title: 'Thrid Joke',
            content: 'Thrid joke content'
        },
        {
            id: 4,
            title: 'Fourth Joke',
            content: 'Fourth joke content'
        },
        {
            id: 5,
            title: 'Fifth Joke',
            content: 'Fifth joke content'
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`)
})