// components/CheckoutSteps.js
import React from 'react';
import { GrFormNext } from "react-icons/gr";

const CheckoutSteps = ({ currentStep }) => {
  const steps = [
    { id: 1, name: 'Address' },
    { id: 2, name: 'Shipping' },
    { id: 3, name: 'Payment' },
  ];

  return (
    <div className="flex  items-center p-6 ml-[30px] mt-[0px] w-[400px] ">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          {/* Step Name */}
          <div className="flex items-center">
            <p
              className={`text-xl font-bold ${
                step.id === currentStep
                  ? 'text-[#17183B]' // Active step
                  : 'text-[#A2A3B1]' // Inactive step
              }`}
            >
              {step.name}
            </p>
          </div>

          {/* Add the GrFormNext icon between steps, but not after the last step */}
          {index < steps.length - 1 && (
            <GrFormNext className="mx-4 text-[#A2A3B1]" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CheckoutSteps;