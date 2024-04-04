import { useState, useEffect } from "react"
import Places from "./Places.jsx"
import Error from "./Error"
import { sortPlacesByDistance } from "../loc"
import { fetchAvailablePlaces } from '../http.js'

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false)
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [errorText, setErrorText] = useState()

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true)

      try {
        const places = await fetchAvailablePlaces()

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude,
          )
          setAvailablePlaces(sortedPlaces)
          setIsFetching(false)
        })
      } catch (error) {
        setErrorText({
          message:
            error.message || "Could not fetch places, please try again later",
        })
      }
    }

    fetchPlaces()
  }, [])

  if (errorText) {
    return <Error title="An error occurred!" message={errorText.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      isLoading={isFetching}
      loadingText="Fetching place data..."
    />
  )
}
