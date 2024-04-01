import { useRef, useState, useEffect, useCallback } from "react"
import Places from "./components/Places.jsx"
import { AVAILABLE_PLACES } from "./data.js"
import Modal from "./components/Modal.jsx"
import DeleteConfirmation from "./components/DeleteConfirmation.jsx"
import logoImg from "./assets/logo.png"
import { sortPlacesByDistance } from "./loc.js"

// some code that doesn't require to run with every component update
// doesn't even need to be a part of the component
const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || []
const storedPlaces = storedIds.map((id) => AVAILABLE_PLACES.find((place) => place.id === id))

function App() {
  const selectedPlace = useRef()
  const [setModalIsOpen, setModalSetIsOpen] = useState(false)
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces)

  // use effect executes after each time the
  // component function is done executing
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude)
      setAvailablePlaces(sortedPlaces)
    })
  }, [availablePlaces])

  function handleStartRemovePlace(id) {
    setModalSetIsOpen(true)
    selectedPlace.current = id
  }

  function handleStopRemovePlace() {
    setModalSetIsOpen(false)
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id)
      return [place, ...prevPickedPlaces]
    })

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || []

    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem("selectedPlaces", JSON.stringify([id, ...storedIds]))
    }
  }
  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) => prevPickedPlaces.filter((place) => place.id !== selectedPlace.current))

    setModalSetIsOpen(false)

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || []
    localStorage.setItem("selectedPlaces", JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current)))
  },[])

  return (
    <>
      <Modal open={setModalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation onCancel={handleStopRemovePlace} onConfirm={handleRemovePlace} />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>Create your personal collection of places you would like to visit or you have visited.</p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          fallbackText="Sorting places by distance..."
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  )
}

export default App
