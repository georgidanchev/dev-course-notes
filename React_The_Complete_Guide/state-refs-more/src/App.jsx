import ProjectsSideBar from "./components/ProjectsSidebar"
import NewProject from "./components/NewProject"
import NoProjectSelected from "./components/NoProjectSelected"

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar />
      <NoProjectSelected />
    </main>
  )
}

export default App
