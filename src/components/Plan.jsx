import arcadeIcon from "../assets/images/icon-arcade.svg"
import advancedIcon from "../assets/images/icon-advanced.svg"
import proIcon from "../assets/images/icon-pro.svg"
import { useState } from "react"

export default function Plan(props) {
    const [id, setID] = useState(props.planDetails.id)


    const montlyPlan = {
        arcade: {id:1, title:"Arcade",price:9,type:"Monthly",short:"mo"},
        advanced: {id:2, title:"Advanced",price:12,type:"Monthly",short:"mo"},
        pro: {id: 3, title:"Pro",price:15,type:"Monthly",short:"mo"}
    }

    const yearlyPlan = {
        arcade: {id: 1, title:"Arcade",price:90,type:"Yearly",short:"yr"},
        advanced: {id:2, title:"Advanced",price:120,type:"yearly",short:"yr"},
        pro: {id:3, title:"Pro",price:150,type:"Yearly",short:"yr"}
    }
    const togglePlan = () => {
        let obj = props.planDetails.short === "mo" ? yearlyPlan : montlyPlan
        handlePlanToggle(obj)
        props.togglePlan()
        props.assignAddOn(props.addOn.map((service) => props.planDetails.short === "mo" ? {...service, price:service.price*10} : {...service, price:service.price/10}))
    }

    const handlePlanToggle = (obj) => {
        let objList = [{...obj.arcade}, {...obj.advanced}, {...obj.pro}]
        for(let i=0; i < 3; i++) {
            if(props.planDetails.id-1 === i) {
                props.setUserPlanDetails(objList[i])
            }
        }
    }

    const handlePlanSelection = (obj,key) => {
        let objList = [{...obj.arcade}, {...obj.advanced}, {...obj.pro}]
        for(let i=0; i < 3; i++) {
            if(key-1 === i) {
                props.setUserPlanDetails(objList[i])
            }
        }
    }

    const handlePlanCLick = async (e) => {
        const key = Number(e.currentTarget.id)
        setID(key)
        if(props.plan) {
            handlePlanSelection(montlyPlan,key)
        }
        else {
            handlePlanSelection(yearlyPlan,key)
        }
    }

  return (
    <>
        <div className="flex gap-2 mb-8">
            <div id={1} onClick={handlePlanCLick} className={`border border-light-gray rounded flex-1 p-4 plan-box ${id === 1 ? "active-plan" : ""}`}>
                <div className="mb-8">
                    <img src={arcadeIcon} alt="" />
                </div>
                <h4 className="text-marine-blue font-semibold">Arcade</h4>
                <p className="text-cool-gray text-sm font-semibold">${props.plan ? montlyPlan.arcade.price + '/mo': yearlyPlan.arcade.price + '/yr'}</p>
                {!props.plan && <p className="text-marine-blue text-xs font-semibold">2 months free</p>}
            </div>
            <div id={2} onClick={handlePlanCLick} className={`border border-light-gray rounded flex-1 p-4 plan-box ${id === 2 ? "active-plan" : ""}`}>
                <div className="mb-8">
                    <img src={advancedIcon} alt="" />
                </div>
                <h4 className="text-marine-blue font-semibold">Advanced</h4>
                <p className="text-cool-gray text-sm font-semibold">${props.plan ? montlyPlan.advanced.price + '/mo' : yearlyPlan.advanced.price + '/yr'}</p>
                {!props.plan && <p className="text-marine-blue text-xs font-semibold">2 months free</p>}
            </div>
            <div id={3} onClick={handlePlanCLick} className={`border border-light-gray rounded flex-1 p-4 plan-box ${id === 3 ? "active-plan" : ""}`}>
                <div className="mb-8">
                    <img src={proIcon} alt="" />
                </div>
                <h4 className="text-marine-blue font-semibold">Pro</h4>
                <p className="text-cool-gray text-sm font-semibold">${props.plan ? montlyPlan.pro.price + '/mo' : yearlyPlan.pro.price + '/yr'}</p>
                {!props.plan && <p className="text-marine-blue text-xs font-semibold">2 months free</p>}
            </div>
        </div>
        <div className="flex bg-magnolia justify-center gap-2 h-12 items-center">
            <span className={`${props.plan ? 'text-marine-blue' : 'text-cool-gray'} font-semibold`}>Monthly</span>
            <div onClick={togglePlan} className={`bg-marine-blue h-5 w-8 self-center rounded-xl flex ${props.plan ? 'justify-start' : 'justify-end'} p-1 cursor-pointer`}>
                <div className="bg-white w-3 h-3 rounded-full self-center"></div>  
            </div>
            <span className={`${!props.plan ? 'text-marine-blue' : 'text-cool-gray'} font-semibold`}>Yearly</span>
        </div>
    </>
  )
}
