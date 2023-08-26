import React, { useState, useEffect, useRef } from "react"
import Card from "../UI/Card"
import useHttp from "../../hooks/http"
import ErrorModal from "../UI/ErrorModal"
import "./Search.css"

const Search = React.memo((props) => {
  const { onLoadIngredients } = props // destructuring object
  const [enteredFilter, setEnteredFilter] = useState("")
  const inputRef = useRef()
  const { isLoading, data, error, sendRequest, clear } = useHttp()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enteredFilter}"`
        sendRequest(
          `https://react-hooks-update-35135-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json${query}`,
          "GET",
        )
      }
    }, 500)

    // useEffect func runs before the new useEffect runs the next time
    return () => {
      clearTimeout(timer)
    }
  }, [enteredFilter, inputRef, sendRequest])

  useEffect(() => {
    if (!isLoading && !error && data) {
      console.log(data)
      const loadedIngredients = []
      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        })
      }

      onLoadIngredients(loadedIngredients)
    }
  }, [data, isLoading, error, onLoadIngredients])

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
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
