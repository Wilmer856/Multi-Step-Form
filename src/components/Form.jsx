import { useEffect, useState } from "react";

export default function Form(props) {

  const [name, setName] = useState(props.userDetails.name)
  const [email, setEmail] = useState(props.userDetails.email)
  const [phone, setPhone] = useState(props.userDetails.phone)

  const handleFormInput = (e) => {
    
    const id = e.target.id;

    if(id === "name") {
      setName(e.target.value)
    }
    else if(id === "email") {
      setEmail(e.target.value)
    }
    else if(id === "phone") {
      setPhone(e.target.value)
    }

    props.handleInputChange(e)
  } 


  return (
    <>
      <form>
        <div className="flex">
          <label htmlFor="name">Name</label>
          {props.errorFields.includes("name") ? <span className="text-strawberry-red ml-auto">{name === "" ? "This field is required" : ""}</span> : ""}
        </div>
        <input onChange={handleFormInput} id="name" className={props.errorFields.includes("name") && !name ? "error" : ""} type="text" placeholder="e.g. Stephen King" value={name}/>
        <div className="flex">
          <label htmlFor="email">Email Address</label>
          {props.errorFields.includes("email") && !props.emailChecker.test(email) ? <span className="text-strawberry-red ml-auto">{email === "" ? "This field is required" : "Email is invalid"}</span> : ""}
        </div>
        <input onChange={handleFormInput} id="email" className={props.errorFields.includes("email") && !props.emailChecker.test(email) ? "error" : ""} type="text" placeholder="e.g. stephenking@lorem.com" value={email}/>
        <div className="flex">
          <label htmlFor="phone">Phone Number</label>
          {props.errorFields.includes("phone") && !props.phoneChecker.test(phone) ? <span className="text-strawberry-red ml-auto">{phone === "" ? "This field is required" : "Phone Number is invalid"}</span> : ""}
        </div>
        <input onChange={handleFormInput} id="phone" className={props.errorFields.includes("phone") && !props.phoneChecker.test(phone) ? "error" : ""} type="text" placeholder="e.g. +1 123 456 7890" value={phone}/>
      </form>
    </>
  )
}
