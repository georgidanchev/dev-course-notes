import { useEffect, useState } from "react"

import Card from "../UI/Card"
import classes from "./AvailableMeals.module.css"
import MealItem from "./MealItem/MealItem"

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState()

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-5023d-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      )

      if (!response.ok) {
        throw new Error("Something went wrong!")
      }

      const responseData = await response.json()

      const loadedMeals = []

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }

      setMeals(loadedMeals)

      setIsLoading(false)
    }

    fetchMeals().catch((err) => {
      setIsLoading(false)
      setHttpError(err.message)
    })
  }, [])

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

  const mealList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <section>
      <ul className={classes.meals}>
        <Card>
          <ul>{mealList}</ul>
        </Card>
      </ul>
    </section>
  )
}

export default AvailableMeals
