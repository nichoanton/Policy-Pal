import React, { useState } from 'react';
import { insurancePlans } from '../data/insurancePlans';
import ProgressBar from '../components/ProgressBar';
import questions from '../data/questions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HealthInsurance = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showPlans, setShowPlans] = useState(false);

  const handleOptionChange = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('Full data entered:', answers);
      setShowPlans(true);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const isOptionSelected = !!answers[currentQuestionIndex];

  const customToastStyle = {
    backgroundColor: '#3B82F6', 
    color: '#ffffff',
  };

  const handleRequestCallback = (planName) => {
    toast.success(`Callback request sent for ${planName}!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        ...customToastStyle,
        marginBottom: '70px',
      },
    });
  };

  if (showPlans) {
    return (
      <div className="flex flex-col bg-gray-50 min-h-screen p-6">
        <ToastContainer />
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 w-full">
          {insurancePlans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-lg rounded-md p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out"
              style={{ height: "auto" }} 
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{plan.name}</h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Eligibility:</strong> {plan.eligibility}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Coverage:</strong> {plan.coverage}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Add-ons:</strong> {plan.addOns.join(', ')}
              </p>
  
              <div className="mt-auto flex justify-center">
                <button
                  onClick={() => handleRequestCallback(plan.name)}
                  className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 transition-all duration-200 ease-in-out"
                  style={{ width: '100%' }} 
                >
                  Request Callback
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <ProgressBar currentStep={currentQuestionIndex + 1} totalSteps={questions.length} />

        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          {questions[currentQuestionIndex].question}
        </h1>
        <p className="text-sm text-gray-600 mb-2 text-center">
          {questions[currentQuestionIndex].description}
        </p>

        <div className="space-y-2">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <label key={index} className="block">
              <input
                type="radio"
                name={`question-${currentQuestionIndex}`}
                value={option}
                onChange={() => handleOptionChange(option)}
                checked={answers[currentQuestionIndex] === option}
                className="mr-3 accent-teal-500" 
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          {currentQuestionIndex > 0 && (
            <button
              onClick={handleBack}
              className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-150"
            >
              Back
            </button>
          )}

          <button
            onClick={handleNext}
            disabled={!isOptionSelected}
            className={`py-2 px-4 rounded text-white transition duration-150 ${
              isOptionSelected ? 'bg-teal-500 hover:bg-teal-600' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Show Plans'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthInsurance;
