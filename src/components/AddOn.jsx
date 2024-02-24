
export default function AddOn(props) {

    const prices = props.planDetails.short === "mo" ? {price1: 1,price2: 2, price3: 2} : {price1: 10,price2: 20, price3: 20}
    const services = [
        {id: "1", title:"Online Service", price:prices.price1},
        {id: "2", title:"Larger Storage", price: prices.price2},
        {id: "3", title: "Customizable Profile", price: prices.price3}
    ]

    const handleAddClick = (e) => {
        if(props.addOnDetails.includes(e.currentTarget.id)) {
            props.assignAddOnDetails(props.addOnDetails.filter((addOn) => addOn !== e.currentTarget.id), services)
        } else {
            props.assignAddOnDetails([...props.addOnDetails, e.currentTarget.id], services)
        }
        
    }


  return (
    <>
        <div id={1} onClick={handleAddClick} className={`flex mb-4 p-3 items-center gap-5 border border-light-gray rounded hover:border-purplish-blue transition-colors cursor-pointer ${props.addOnDetails.includes("1") ? "active-add-on" : ""}`}>
            <div className={`border h-4 w-4 rounded ${props.addOnDetails.includes("1") ? "checked-add-on" : ""}`}></div>
            <div>
                <h4 className="text-marine-blue font-semibold">Online service</h4>
                <p className="text-cool-gray text-sm">Access to multiplayer games</p>
            </div>
            <span className="ml-auto text-purplish-blue text-sm">+${props.planDetails.short === "mo" ? 1 + "/mo" : 10 + "/yr"}</span>
        </div>
        <div id={2} onClick={handleAddClick} className={`flex mb-4 p-3 items-center gap-5 border border-light-gray rounded hover:border-purplish-blue transition-colors cursor-pointer ${props.addOnDetails.includes("2") ? "active-add-on" : ""}`}>
            <div className={`border h-4 w-4 rounded ${props.addOnDetails.includes("2") ? "checked-add-on" : ""}`}></div>
            <div>
                <h4 className="text-marine-blue font-semibold">Larger storage</h4>
                <p className="text-cool-gray text-sm">Extra 1TB of cloud save</p>
            </div>
            <span className="ml-auto text-purplish-blue text-sm">+${props.planDetails.short === "mo" ? 2 + "/mo" : 20 + "/yr"}</span>
        </div>
        <div id={3} onClick={handleAddClick} className={`flex mb-4 p-3 items-center gap-5 border border-light-gray rounded hover:border-purplish-blue transition-colors cursor-pointer ${props.addOnDetails.includes("3") ? "active-add-on" : ""}`}>
            <div className={`border h-4 w-4 rounded ${props.addOnDetails.includes("3") ? "checked-add-on" : ""}`}></div>
            <div>
                <h4 className="text-marine-blue font-semibold">Customizable profile</h4>
                <p className="text-cool-gray text-sm">Custom theme on your profile</p>
            </div>
            <span className="ml-auto text-purplish-blue text-sm">+${props.planDetails.short === "mo" ? 2 + "/mo" : 20 + "/yr"}</span>
        </div>
        
    
    </>
  )
}
