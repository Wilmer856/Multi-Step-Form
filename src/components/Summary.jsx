
export default function Summary(props) {

    const handleChangeClick = () => {
        props.handleStepChange(props.change)
    }
  return (
    <>
    <div className="bg-magnolia p-5 mb-4">
        <div className="flex items-center mb-4">
            <div>
                <h4 className="text-marine-blue font-semibold">{`${props.planDetails.title} (${props.planDetails.type})`}</h4>
                <p onClick={handleChangeClick} className="text-cool-gray text-sm underline cursor-pointer hover:text-purplish-blue">Change</p>
            </div>
            <span className="text-marine-blue font-semibold ml-auto">${props.planDetails.price}/{props.planDetails.short}</span>
        </div>
        <hr />
        <div className="mt-4">
            {props.addOn.length > 0 && props.addOn.map((service) => (
                <div key={service.id} className="flex summary-add-on-box">
                    <p className="text-cool-gray text-sm">{service.title}</p>
                    <span className="text-marine-blue ml-auto">+${service.price}/{props.planDetails.short}</span>
                </div>
            ))}
        </div>
    </div>
    <div className="flex p-5">
        <p className="text-cool-gray text-sm">Total (per {props.planDetails.short === "mo" ? "month" : "year"})</p>
        <span className="text-purplish-blue font-semibold text-xl ml-auto">+${props.planDetails.price + props.addOn.reduce((acc, curr) => acc + curr.price, 0)}/{props.planDetails.short}</span>
    </div>
    </>
  )
}
