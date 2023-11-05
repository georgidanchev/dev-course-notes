import { useState } from "react"
import { CORE_CONCEPTS, EXAMPLES } from "../data"
import TabButton from "./TabButton"
import Section from "./Section"
import Tabs from "./tabs"

export default function Examples() {
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
    <Section id="examples" title="Examples">
      <Tabs
        buttons={CORE_CONCEPTS.map((conceptItem) => (
          <TabButton
            key={`${conceptItem.title} + "2"`}
            isSelected={selectedTopic === conceptItem.title}
            onSelect={handleSelect}
            value={conceptItem.title}
          />
        ))}
      >
        {tabContent}
      </Tabs>
    </Section>
  )
}
