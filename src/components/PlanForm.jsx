import Heading from "./Heading"
import PageSwitcher from "./PageSwitcher"
import Plan from "./Plan"



export default function PlanForm() {
    const heading = {
        title: "Select your plan",
        subTitle: "You have the option of montly or yearly billing."
    }

    const handleClick = (e) => {
        e.preventDefault()
    }
    return (
        <div className="form-transition">
            <Heading heading={heading}/>
            
            <Plan />

            <PageSwitcher link="/"/>
        </div>
  )
}
