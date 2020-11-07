import React from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import Card from './components/Card/Card'
import data from './components/Card/data'

function App() {
  return (
    <>
      {data.map((item) => (
        <Card key={nanoid()} title={item.text} description={item.description}>
          <img className="card-img-top" src={item.img} alt="" />
        </Card>
      ))}
    </>
  )
}

export default App
