import { useEffect } from "react"
import ProgressBar from "./ProgressBar"

const TIMER = 5000

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm()
    }, TIMER)

    // clean up function when component is removed
    return () => {
      clearTimeout(timer)
    }
  }, [onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>

        <ProgressBar TIMER={TIMER} />
      </div>
    </div>
  )
}
