import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
      <div
        className="bg-teal-600 h-full rounded-full transition-all duration-300" 
        style={{ width: `${percentage}%` }}
      ></div>
      <p className="text-center text-sm mt-2">{`Question ${currentStep} of ${totalSteps}`}</p>
    </div>
  );
};

export default ProgressBar;
