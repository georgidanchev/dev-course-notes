import React from "react"
import "./Modal.css"
import { CSSTransition } from "react-transition-group"

const animationTiming = {
  enter: 400,
  exit: 1000,
}

const modal = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enterActive: 'ModalOpen',
        exitActive: 'ModalClose'
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  )
}

export default modal
