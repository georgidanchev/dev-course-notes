import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"

describe("Greeting Component", () => {
  test("renders Hello World as text", () => {
    // Arrange
    render(<Greeting />)

    // Assert
    const helloWorldElement = screen.getByText("Hello World!")
    expect(helloWorldElement).toBeInTheDocument()
  })

  test("renders good to see you if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />)

    // Assert
    const helloWorldElement = screen.getByText("good to see you", { exact: false })
    expect(helloWorldElement).toBeInTheDocument()
  })

  test("Renders 'changed!' If the button was clicked", () => {
    // Arrange
    render(<Greeting />)

    // Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    // Assert
    const outputElement = screen.getByText("Changed!", { exact: false })
    expect(outputElement).toBeInTheDocument()
  })

  test("does not render 'good to see you' if the button was clicked", () => {
    // Arrange
    render(<Greeting />)

    // Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    // Assert
    const outputElement = screen.queryByText("good to see you", { exact: false })
    expect(outputElement).toBeNull()
  })
})
