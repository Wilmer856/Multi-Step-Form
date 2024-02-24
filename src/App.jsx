import { useEffect, useState } from "react";
import FormSteps from "./components/FormSteps";
import SuperForm from "./components/SuperForm";

export default function App() {
  // passes the change state to the required components
  const [stepActive, setStepActive] = useState("/")
  const [userDetails, setUserDetails] = useState({name: '', email: '', phone: ''})
  const [planDetails, setPlanDetails] = useState({id: 1, title:"Arcade", price:9, type:"monthly", short:"mo"})
  const [plan,setPlan] = useState(true)
  // contains add on id's
  const [addOnDetails, setAddOnDetails] = useState([])
  // contains add on objects
  const [addOn, setAddOn] = useState([])
  const [submissionDetails, setSubmissionDetails] = useState(null)
  
  const handleStepChange = (step) => {
    setStepActive(step)
  }

  const assignUserDetails = (details) => {
    setUserDetails(details)
  }

  const setUserPlanDetails = (details) => {
    setPlanDetails(details)
  }

  const togglePlan = () => {
    setPlan(!plan)
  }

  const assignAddOnDetails = (details, services) => {
    setAddOnDetails(details)
    assignAddOn(services.filter((service) => details.includes(service.id)))
  }

  const assignAddOn = (details) => {
    setAddOn(details)
  }

  const submitForm = () => {
    setSubmissionDetails({userInfo:userDetails, userPlan: planDetails, additions: addOn})
  }

  
  return (  
        <div className="xl:container bg-white p-4 rounded main">
          <FormSteps currentPath={stepActive}/>
          <SuperForm currentPath={stepActive} handleStepChange={handleStepChange} 
            assignUserDetails={assignUserDetails} userDetails={userDetails} 
            setUserPlanDetails={setUserPlanDetails} planDetails={planDetails} togglePlan={togglePlan} plan={plan}
            assignAddOnDetails={assignAddOnDetails} addOnDetails={addOnDetails} assignAddOn={assignAddOn} addOn={addOn}
            submitForm={submitForm}
          />
        </div>
      
  );
}
