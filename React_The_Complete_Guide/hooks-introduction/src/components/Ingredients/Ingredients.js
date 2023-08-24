import React, { useReducer, useEffect, useCallback } from "react"

import IngredientForm from "./IngredientForm"
import IngredientList from "./IngredientList"
import ErrorModal from "../UI/ErrorModal"
import Search from "./Search"

// Reducer provides cleaner logic
// It's great for complex projects
// which could relay on previous states
const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients
    case "ADD":
      return [...currentIngredients, action.ingredient]
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id)
    default:
      throw new Error("Should not get there!")
  }
}

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null }
    case "RESPONSE":
      return { ...curHttpState, loading: false, error: null }
    case "ERROR":
      return { loading: false, error: action.errorMessage }
    case "CLEAR":
      return { ...curHttpState, error: null}
    default:
      throw new Error("Should not get there!")
  }
}

const Ingredients = () => {
  // const [userIngredients, setUserIngredients] = useState([])
  const [userIngredients, dispatch] = useReducer(ingredientReducer, [])
  const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null })
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState()

  useEffect(() => {
    console.log("reading ingredients", userIngredients)
  }, [userIngredients])

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatch({ type: "SET", ingredients: filteredIngredients })
  }, [])

  const addIngredientHandler = (ingredient) => {
    // setIsLoading(true)
    dispatchHttp({ type: "SEND" })

    fetch(
      "https://react-hooks-update-35135-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify({ ingredient }),
        headers: { "Content-Type": "application/json" },
      },
    )
      .then((response) => {
        dispatchHttp({ type: "RESPONSE" })
        return response.json()
      })

      .then((responseData) => {
        // setUserIngredients((prevIngredients) => [
        //   ...prevIngredients,
        //   { id: responseData.name, ...ingredient },
        // ])
        dispatch({ type: "ADD", ingredient: { id: responseData.name, ...ingredient } })
      })
  }

  const removeIngredientHandler = (ingredientId) => {
    dispatchHttp({ type: "SEND" })

    fetch(
      `https://react-hooks-update-35135-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${ingredientId}.json`,
      {
        method: "DELETE",
      },
    )
      .then(() => {
        dispatchHttp({ type: "RESPONSE" })
        // setUserIngredients((prevIngredients) =>
        //   prevIngredients.filter((ingredient) => ingredient.id !== ingredientId),
        // )
        dispatch({ type: "DELETE", id: ingredientId })
      })
      .catch(() => {
        // setError("Something went wrong!")
        // dispatchHttp({ type: "RESPONSE" })
        dispatchHttp({ type: "ERROR", errorMessage: 'Something went wrong' })
      })
  }

  const clearError = () => {
    dispatchHttp({ type: "CLEAR", errorMessage: 'Something went wrong' })
  }

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}

      <IngredientForm onAddIngredient={addIngredientHandler} loading={httpState.loading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />

        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
        {/* Need to add list here! */}
      </section>
    </div>
  )
}

export default Ingredients
