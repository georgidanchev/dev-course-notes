import { useRef, useState, useCallback, useEffect } from "react"

import Places from "./components/Places.jsx"
import Modal from "./components/Modal.jsx"
import DeleteConfirmation from "./components/DeleteConfirmation.jsx"
import logoImg from "./assets/logo.png"
import AvailablePlaces from "./components/AvailablePlaces.jsx"
import { fetchUserPlaces, updateUserPlaces } from "./http.js"
import Error from "./components/Error.jsx"

function App() {
  const selectedPlace = useRef()

  const [userPlaces, setUserPlaces] = useState([])

  const [isFetching, setIsFetching] = useState(false)

  const [errorText, setErrorText] = useState()

  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState()

  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true)

      try {
        const userPlacesData = await fetchUserPlaces()
        setUserPlaces(userPlacesData)
      } catch (error) {
        setErrorText({
          message: error.message || "Failed to fetch user places.",
        })
      }

      setIsFetching(false)
    }

    fetchPlaces()
  }, [])

  function handleStartRemovePlace(place) {
    setModalIsOpen(true)
    selectedPlace.current = place
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false)
  }

  async function handleSelectPlace(_selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = []
      }
      if (prevPickedPlaces.some((place) => place.id === _selectedPlace.id)) {
        return prevPickedPlaces
      }
      return [_selectedPlace, ...prevPickedPlaces]
    })

    try {
      await updateUserPlaces([_selectedPlace, ...userPlaces])
    } catch (error) {
      setUserPlaces(userPlaces)
      setErrorUpdatingPlaces({
        message: error.message || "Failed to update places",
      })
    }
  }

  const handleRemovePlace = useCallback(async () => {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id),
    )

    try {
      await updateUserPlaces(
        userPlaces.filter((place) => place.id !== selectedPlace.current.id),
      )
    } catch (error) {
      setUserPlaces(userPlaces)
      setErrorUpdatingPlaces({
        message: error.message || "Failed to delete place.",
      })
    }

    setModalIsOpen(false)
  }, [userPlaces])

  function handleError() {
    setErrorUpdatingPlaces(null)
  }

  return (
    <>
      <Modal open={errorUpdatingPlaces} onClose={handleError}>
        {errorUpdatingPlaces && (
          <Error
            title="An error occurred!"
            message={errorUpdatingPlaces.message}
            onConfirm={handleError}
          />
        )}
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {errorText && (
          <Error title="An error occurred!" message={errorText.message} />
        )}

        {!errorText && (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            places={userPlaces}
            isLoading={isFetching}
            loadingText="Fetching your places...."
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  )
}

export default App
