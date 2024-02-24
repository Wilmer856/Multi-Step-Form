import { useState } from "react";
import Step from "./Step";

export default function FormSteps(props) {

  const handleStepChange = (path) => {
    const replace = props.currentPath ==="/submission" && path === "/summary"
    if(props.currentPath === path || replace) {
      return true;
    }
    return false;  
  }

  const formSteps = [
    { num: 1, title: "Your Info", path: "/", isActive: handleStepChange("/")},
    { num: 2, title: "Select Plan", path: "/plan", isActive: handleStepChange("/plan")},
    { num: 3, title: "Add-Ons", path: "/add-on", isActive: handleStepChange("/add-on")},
    { num: 4, title: "Summary", path: "/summary", isActive: handleStepChange("/summary")},
  ];

  return (
    <div className="form-container rounded p-8">
      {formSteps.map((step) => (
        <Step {...step} key={step.num}/>
      ))}
    </div>
  );
}
