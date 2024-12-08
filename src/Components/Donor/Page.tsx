import { useState } from "react";
import arrow from '../../../public/assets/svg/Arrow.svg';
import Image from "next/image";

const Page:React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <div className="bg-gradient-to-r from-[#FAF1DF] to-[#E2F3EB]">
     <div className=" p-8 flex items-center justify-center ">
      <div className=" w-full  flex gap-4 flex-row ">
        <div className=" w-[40%] bg-white h-full p-6 rounded-l-lg">
          <div className="flex flex-col text-[24px] font-inter font-bold gap-2">
            {["Enter Donor's Information", "Add Attorney", "Add Preferences", "Final Check: LPA Details"].map((step, index) => (
              <button
                key={index}
                onClick={() => handleStepChange(index + 1)}
                className={`text-left py-2 px-4 rounded-md transition-colors ${
                  currentStep === index + 1
                    ? "bg-white text-green-700 font-bold shadow"
                    : "bg-transparent text-gray-700 hover:text-green-700"
                }`}
              >
                {step}
              </button>
            ))}
          </div>
        </div>

        <div className=" w-[60%] rounded-lg shadow-lg bg-white mr-4 p-6">
          {currentStep === 1 && (
            <div>
             
             
              <h1
          className="flex gap-2 text-sm text-green-700 hover:underline mb-4 text-[20px] font-inter font-medium cursor-pointer"
          onClick={() => handleStepChange(0)} // Decrement step, but not below 1
        >
 <Image src={arrow} alt="" /> Back            
   </h1>
              <h2 className="text-xl font-bold mb-4">Enter Donor's Information</h2>
              <form className="py-4">
                <div className="flex w-full gap-4 justify-between ">
                <span className="w-1/2">
                <label htmlFor="" className="xl:text-[25px]  font-medium text-[18px] text-[#191A15] font-inter ">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                   className="input-field py-4"
                  />
                   </span>
                   <span className="w-1/2">
                   <label htmlFor="" className="xl:text-[25px] text-[18px]  font-medium text-[#191A15] font-inter ">Last Name</label>
<input
  type="text"
  placeholder="Last Name"
  className="input-field py-4"
/>
                   </span>
                </div>
                <div className="flex w-full py-4 gap-4 justify-between ">
                <span className="w-1/2">
                <label htmlFor="" className="xl:text-[25px] text-[18px] font-medium text-[#191A15] font-inter ">Date of Birth</label>
                <input
                    type="date"
                    placeholder="Date of Birth"
                 className="input-field py-4"
                  />
                   </span>
                   <span className="w-1/2">
                   <label htmlFor="" className="xl:text-[25px]  font-medium text-[18px] text-[#191A15] font-inter ">Email Address</label>
                   <input
                    type="email"
                    placeholder="Email Address"
                    className="input-field py-4"
                  />
                   </span>

                </div>
                <div>
                    <label className="xl:text-[25px] font-inter text-[18px] font-semibold text-[#191A15]">Postcode lookup</label>
                    <input
  type="text"
  placeholder="Find UK address"
  className="input-field py-4 text-right font-medium placeholder-green-700 text-green-700"
/>

                </div>
                <div>
                  <button className="text-[18px] py-4 font-semibold text-[#54BD95]">
                    Enter address manually
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="" className="xl:text-[25px]  font-inter text-[20px] font-semibold text-[#191A15]">Address Line 1</label>
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    className="input-field"
                  />
                  <label htmlFor="" className="xl:text-[25px]   font-inter text-[20px] font-semibold text-[#191A15]">Address Line 2</label>
                  <input
                    type="text"
                    placeholder="Address Line 2"
                    className="input-field"
                  />
                  <label htmlFor="" className="xl:text-[25px]   font-inter text-[20px] font-semibold text-[#191A15]">Address Line 3</label>
                  <input
                    type="text"
                    placeholder="Address Line 3"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span className="py-4 text-[16px] font-inter">
                    The donor is unable to sign or make a mark 
on the LPA
                    </span>
                  </label>
                </div>
                <div className="flex justify-end mt-4 gap-4">
                <button
                type="button"
                className="bg-[#54BD95] xs:text-[13px] font-inter text-[18px] xs:py-2 xs:px-4 text-white font-medium py-3 px-6 rounded-full"
              >
              Save Details
              </button>
              <button
                type="button"
                className="border text-[#C9C9C9] xs:text-[13px] font-inter text-[18px] xs:py-2 xs:px-4  font-medium py-3 px-6 rounded-full"
              >
Cancel              </button>
                
                </div>
              </form>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <button
                onClick={() => handleStepChange(1)}
                className="text-sm text-green-700 hover:underline mb-4"
              >
                &larr; Back
              </button>
              <h2 className="text-xl font-bold mb-4">
                How should your Attorneys make decisions?
              </h2>
              <form className="space-y-4">
                {[
                  "I only appoint one attorney",
                  "Jointly and severally",
                  "Jointly",
                  "Jointly for some decisions and jointly and severally for others",
                ].map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-2 p-2 border rounded-lg cursor-pointer hover:bg-green-50 transition"
                  >
                    <input type="radio" name="attorneyDecision" />
                    <span>{option}</span>
                  </label>
                ))}
                <button type="button" className="btn-primary mt-4">
                  Continue
                </button>
              </form>
            </div>
          )}

          {/* Add further steps similarly */}
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Page;
