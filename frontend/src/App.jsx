import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get(`/api/jokes`)
      .then((response) => {
        console.log(response, response.data)
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
      <h1>Fullstack Frontend</h1>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map((joke) => (<div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
          )
        )
      }
    </>
  )
}

export default App
