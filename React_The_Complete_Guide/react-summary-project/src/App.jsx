import MainHeader from "./components/MainHeader"
import PostsList from "./components/PostsList"
import { useState } from "react"

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function showModalHandler() {
    setModalIsVisible(true)
  }

  function hideModalHandler() {
    setModalIsVisible(false)
  }

  return (
    <>
      <MainHeader createPost={showModalHandler} />

      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  )
}

export default App
