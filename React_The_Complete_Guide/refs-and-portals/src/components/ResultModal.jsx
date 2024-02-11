import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  const dialog = useRef()

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
      <h2>Your {result}</h2>
      <p>
        The target times was <strong>{targetTime} seconds.</strong>
      </p>

      <p>
        You stopped the timer with <strong>x seconds left</strong>.
      </p>

      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  )
})

export default ResultModal
