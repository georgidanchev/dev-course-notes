import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
  const dialog = useRef()
  const userLost = remainingTime <= 0
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)

  useImperativeHandle(ref, () => {
    return {
      // Exposing method called open
      open() {
        dialog.current.showModal()
      },
    }
  })

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {userLost ? "lost" : "won"}</h2>

      <p>
        The target times was <strong>{targetTime} seconds.</strong>
      </p>

      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong>.
      </p>

      <form method="dialog" onSubmit={onReset}>
        <button type="submit">Close</button>
      </form>
    </dialog>
  )
})

export default ResultModal
