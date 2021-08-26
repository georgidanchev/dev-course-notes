import "./App.css"
import { Provider } from "react-redux"
import PostForm from "./components/PostForm"
import Posts from "./components/Posts"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <Posts />
      </div>
    </Provider>
  )
}

export default App
