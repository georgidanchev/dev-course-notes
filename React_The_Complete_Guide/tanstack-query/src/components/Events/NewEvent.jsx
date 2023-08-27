import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import Modal from "../UI/Modal.jsx"
import EventForm from "./EventForm.jsx"
import { createNewEvent } from "../../utils/http"
import ErrorBlock from "../UI/ErrorBlock.jsx"
import { queryClient } from "../../utils/http"

export default function NewEvent() {
  const navigate = useNavigate()

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      // tells react query that current data is no longer valid
      queryClient.invalidateQueries({ queryKey: ["events"], exact: true })
      navigate("/events")
    },
  })

  function handleSubmit(formData) {
    mutate({
      event: formData,
    })
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && "Submitting..."}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="Failed to create event"
          message={
            error.info?.message || "Default error: failed to create event."
          }
        />
      )}
    </Modal>
  )
}
