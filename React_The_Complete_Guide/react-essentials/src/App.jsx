import { useState } from "react"
import { CORE_CONCEPTS, EXAMPLES } from "./data"
import CoreConcept from "./components/CoreConcept"
import Header from "./components/header/Header"
import TabButton from "./components/TabButton"

function App() {
  const [selectedTopic, setSelectedTopic] = useState()

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }

  let tabContent = <p>Please select a topic.</p>

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic.toLowerCase()].title}</h3>
        <p>{EXAMPLES[selectedTopic.toLowerCase()].description}</p>
        <code>{EXAMPLES[selectedTopic.toLowerCase()].code}</code>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept
                key={`${conceptItem.title} + "1"`}
                title={conceptItem.title}
                description={conceptItem.description}
                image={conceptItem.image}
              />
            ))}
          </ul>

          <section id="examples">
            <h2>Examples</h2>

            <menu>
              {CORE_CONCEPTS.map((conceptItem) => (
                <TabButton
                  key={`${conceptItem.title} + "2"`}
                  isSelected={selectedTopic === conceptItem.title}
                  onSelect={handleSelect}
                  value={conceptItem.title}
                />
              ))}
            </menu>

            {tabContent}
          </section>
        </section>
      </main>
    </div>
  )
}

export default App
