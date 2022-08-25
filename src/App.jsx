import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

function App() {
  const cards = data.map(element => {
    return (
      <>
        <Card
          {...element}

        />

      </>
    )
  })
  console.log(cards)
  return (
    <div className="container">
      <div className="App">
        <Navbar />
        <section className='card-list'>
          {cards}
        </section>
      </div>
    </div>
  )
}

export default App
