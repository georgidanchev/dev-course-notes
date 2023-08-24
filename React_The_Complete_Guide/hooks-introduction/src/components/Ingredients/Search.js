import React, { useState, useEffect, useRef } from "react"

import Card from "../UI/Card"
import "./Search.css"

const Search = React.memo((props) => {
  const { onLoadIngredients } = props // destructuring object
  const [enteredFilter, setEnteredFilter] = useState("")
  const inputRef = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0 ? "" : `?orderBy="title"&equalTo="${enteredFilter}"`
        fetch(
          "https://react-hooks-update-35135-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json" +
            query,
        )
          .then((response) => response.json())
          .then((responseData) => {
            const loadedIngredients = []

            for (const key in responseData) {
              loadedIngredients.push({
                id: key,
                title: responseData[key].ingredient.title,
                amount: responseData[key].ingredient.amount,
              })
            }

            onLoadIngredients(loadedIngredients)
          })
      }
    }, 500)

    // useEffect func runs before the new useEffect runs the next time
    return () => {
      clearTimeout(timer)
    }
  }, [enteredFilter, onLoadIngredients, inputRef])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={(event) => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  )
})

export default Search
