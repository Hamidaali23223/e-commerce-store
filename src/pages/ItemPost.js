import React, { useState } from "react";
import Navbar from "../components/Navbar";
const Register = () => {
  // const [step, setStep] = useState(1);
  // const StepOne = () => {
  //   return (
  //     <div>
  //       <input className="" placeholder="Enter firstName"></input>
  //     </div>
  //   );
  // };
  // const StepTwo = () => {
  //   return (
  //     <div>
  //       <input placeholder="Enter secondName"></input>
  //     </div>
  //   );
  // };

  // const StepThree = () => {
  //   return (
  //     <div>
  //       <input placeholder="Enter email"></input>
  //     </div>
  //   );
  // };

  // const StepFour = () => {
  //   return (
  //     <div>
  //       <input placeholder="Enter password"></input>
  //     </div>
  //   );
  // };
  return (
    <section className="bg-gray-500 h-screen">
      <Navbar />
      <div className=" bg-white flex  justify-center items-center m-12 md:flex-row">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <label className="text-xl font-semibold">Email</label>
              <input
                type="text"
                className="w-[32vw] px-4 h-10 border rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xl font-semibold">Password</label>
              <input
                type="text"
                className="w-[32vw] border px-4 h-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col">
              <label className="text-xl font-semibold">Number</label>
              <input
                type="text"
                className="w-[32vw] px-4 border h-10 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xl font-semibold">Shope Name</label>
              <input
                type="text"
                className="w-[32vw] border px-4 h-10 rounded-md"
              />
            </div>
          </div>
          <div>
            <input
              type="number"
              className="w-[32vw] border px-4 h-10 rounded-md"
            />
            <label className="text-xl font-semibold">Verification</label>
          </div>
          <button className="bg-red-400">Submit</button>
        </div>
      </div>
      {/* {step == 2 && (
          <div className="step2">
            <StepTwo />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setStep(2)}
            >
              Go to step 3
            </button>
          </div>
        )}
        {step == 3 && (
          <div className="step3">
            <StepThree />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setStep(3)}
            >
              Go to step 4
            </button>
          </div>
        )}
        {step == 4 && (
          <div className="step4">
            <StepFour />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setStep(4)}
            >
              Go to step 1
            </button>
          </div>
        )} */}
    </section>
  );
};

export default Register;
