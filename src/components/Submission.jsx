import  thankYouImage from "../assets/images/icon-thank-you.svg"

export default function Submission() {
  return (
    <>
        <div className="grid place-content-center text-center h-full">
            <div className="flex justify-center mb-6">
                <img src={thankYouImage} alt="" />
            </div>
             <h3 className="mb-4">Thank you!</h3>
             <p className="w-[50ch] text-pretty text-cool-gray">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    </>
  )
}
