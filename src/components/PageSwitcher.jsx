import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function PageSwitcher(props) {

  const handleClick = async (e) => {
    e.preventDefault()

    if(props.id === 1) {
      const error = await props.handleSubmit();
      const hasErrors = error.length > 0;

      if (!hasErrors) {
        props.handleStepChange(props.link);
      }
    } 
    else {
      props.handleStepChange(props.link);
    }
  }

  const handleBackClick = (e) => {
    e.preventDefault()
    props.handleStepChange(props.backLink)
  }

  const handleSubmissionLink = (e) => {
    e.preventDefault()
    props.submitForm()
    props.handleStepChange(props.link)
  }

  return (
    <div className="flex mt-32">
        {props.id !== 1 && <button onClick={handleBackClick} className="go-back-btn">Go Back</button>}
        {props.id <= 3 && <button onClick={handleClick} className="next-step-btn">Next Step</button>}
        {props.id === 4 && <button onClick={handleSubmissionLink} className="confirm-btn">Confirm</button>}
    </div>
  )
}
