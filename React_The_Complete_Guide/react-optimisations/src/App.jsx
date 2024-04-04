import { useState } from "react"

import Counter from "./components/Counter/Counter"
import Header from "./components/Header"
import { log } from "./log.js"
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx"

function App() {
  log("<App /> rendered")
  const [chosenCount, setChosenCount] = useState(0)

  function handleSetCount(newCount) {
    setChosenCount(newCount)
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  )
}

export default App
