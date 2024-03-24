import ProjectsSideBar from "./components/ProjectsSidebar"
import NewProject from "./components/NewProject"
import NoProjectSelected from "./components/NoProjectSelected"
import { useState } from "react"
import SelectedProject from "./components/SelectedProject"

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  })

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random()

      const newTask = {
        projectId: prevState.selectedProjectId,
        text:text,
        id: taskId
      }

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  function handleDeleteTask() {}

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random()

      const newProject = {
        ...projectData,
        id: projectId,
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    })
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      }
    })
  }

  const selectedProject = projectsState.projects.find((project) => projectsState.id === project.selectedProjectId)

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onDeleteTask={handleDeleteTask}
      onAddTask={handleAddTask}
      tasks={projectsState.tasks}
    />
  )

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  )
}

export default App
