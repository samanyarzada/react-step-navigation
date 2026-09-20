import { useState } from "react";
import "../App.css";
export default function StepCard() {
  const [step, setStep] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const incFunction = () => {
    setStep((s) => {
      if (s >=2) {
        return 0;
      }

      return s + 1;
    });
    console.log(step);
  };
  const decFunction = () => {
    setStep((s) => {
      if (s <= 0) {
        return 2;
      }
      return s - 1;
    });
    console.log(step);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-80">
      <h1 className="text-2xl font-bold text-center mb-6">My Options</h1>

      {isShow && (
        <div>
          {" "}
          <div className="space-y-3 text-center">
            <p className={step >= 0 ? "active" : ""}>Option 1</p>

            <p className={step >= 1 ? "active" : ""}>Option 2</p>

            <p className={step >= 2 ? "active" : ""}>Option 3</p>
          </div>
          <p className="text-center text-gray-500 my-6">
            This is option {step + 1}
          </p>
          <div className="flex justify-between">
            <button
              onClick={decFunction}
              className="bg-gray-200 px-4 py-2 rounded-lg"
            >
              Previous
            </button>

            <button
              onClick={incFunction}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Hide */}
      <button
        onClick={() => {
          setIsShow((x) => !x);
        }}
        className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg"
      >
        Hide
      </button>
    </div>
  );
}
