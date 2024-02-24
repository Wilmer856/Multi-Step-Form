import AddOn from "./AddOn"
import Form from "./Form"
import Heading from "./Heading"
import PageSwitcher from "./PageSwitcher"
import Plan from "./Plan"
import Submission from "./Submission"
import Summary from "./Summary"
import { useState } from "react"

export default function SuperForm(props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [errorFields, setErrorFields] = useState([])
  const [errors, setErrors] = useState(true)

  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PHONE_REGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/


  const handleInputChange = (e) => {
    
    const id = e.target.id;

    if(id === "name") {
      setName(e.target.value)
    }
    else if(id === "email") {
      setEmail(e.target.value)
    }
    else if(id === "phone") {
      setPhoneNum(e.target.value)
    }
  }
  

  const handleSubmit = async () => {
    let errorList = []

    if(!name) {
        errorList.push("name")
    }
    if(!EMAIL_REGEX.test(email)) {
        errorList.push("email")
    }  
    if(!PHONE_REGEX.test(phoneNum)) {
        errorList.push("phone")
    }

    setErrorFields(errorList)
    if(!errorFields.length) {
        setErrors(false)
    } else {
        setErrors(true)
    }
    props.assignUserDetails({name:name, email:email, phone: phoneNum})
    return await Promise.resolve(errorList);
  }

    const formDetails = {
        form1:{id: 1, heading: "Personal info", subHeading: "Please provide your name, email, and phone number", path:"/", back:null, forward:"/plan"},
        form2:{id: 2, heading: "Select your plan", subHeading: "You have the option of montly or yearly billing.", path: "/plan", back:"/", forward:"/add-on"},
        form3:{id: 3, heading: "Pick add-ons", subHeading: "Add-ons help enhance your gaming experience", path: "/add-on", back:"/plan", forward:"/summary"},
        form4:{id: 4, heading: "Finishing up", subHeading: "Double-check everything looks OK before confirming", path: "/summary", back:"/add-on", change:"/plan",forward: "/submission"},
    }

    const obtainCurrentStep = () => {

        if(props.currentPath === formDetails.form1.path) {
            return (
                <>
                    <Heading heading={formDetails.form1.heading} subHeading={formDetails.form1.subHeading}/>
                    <Form handleInputChange={handleInputChange} errorFields={errorFields} userDetails={props.userDetails} emailChecker={EMAIL_REGEX} phoneChecker={PHONE_REGEX}/>
                    <PageSwitcher id= {formDetails.form1.id} link={formDetails.form1.forward} handleStepChange={props.handleStepChange} handleSubmit={handleSubmit} errors={errors} path={formDetails.form1.path}/>
                </>
            )
        }
        else if(props.currentPath === formDetails.form2.path) {
            return (
                <>
                    <Heading heading={formDetails.form2.heading} subHeading={formDetails.form2.subHeading}/>
                    <Plan setUserPlanDetails={props.setUserPlanDetails} planDetails={props.planDetails} togglePlan={props.togglePlan} plan={props.plan} 
                        assignAddOn={props.assignAddOn} addOn={props.addOn}
                    />
                    <PageSwitcher id={formDetails.form2.id} link={formDetails.form2.forward} backLink={formDetails.form2.back} handleStepChange={props.handleStepChange} handleSubmit={handleSubmit} path={formDetails.form2.path}/>
                </>
            )
        }
        else if(props.currentPath === formDetails.form3.path) {
            return (
                <>
                    <Heading heading={formDetails.form3.heading} subHeading={formDetails.form3.subHeading}/>
                    <AddOn assignAddOnDetails={props.assignAddOnDetails} addOnDetails={props.addOnDetails} assignAddOn={props.assignAddOn} addOn={props.addOn} planDetails={props.planDetails}/>
                    <PageSwitcher id={formDetails.form3.id} link={formDetails.form3.forward} backLink={formDetails.form3.back} handleStepChange={props.handleStepChange} handleSubmit={handleSubmit}  path={formDetails.form3.path}/>
                </>
            )
        }
        else if(props.currentPath === formDetails.form4.path) {
            return (
                <>
                    <Heading heading={formDetails.form4.heading} subHeading={formDetails.form4.subHeading}/>
                    <Summary addOn={props.addOn} planDetails={props.planDetails} handleStepChange={props.handleStepChange} change={formDetails.form4.change} forward={formDetails.form4.forward}/>
                    <PageSwitcher id={formDetails.form4.id} link={formDetails.form4.forward} backLink={formDetails.form4.back} 
                                    handleStepChange={props.handleStepChange} path={formDetails.form4.path} submitForm={props.submitForm}
                    />
                </>
            )
        }
        else if(props.currentPath === formDetails.form4.forward) {
            return (
                <>
                    <Submission />
                </>
            )
        }

    }
  return (
    <div className="form-transition">
        {obtainCurrentStep()}
    </div>
  )
}
