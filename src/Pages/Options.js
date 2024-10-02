import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import lifeInsuranceImage from '../assets/life-insurance.png';
import healthInsuranceImage from '../assets/health-insurance.png';
import carInsuranceImage from '../assets/car-insurance.png';
import homeInsuranceImage from '../assets/home-insurance.png';

export default function Options() {
  const navigate = useNavigate();

  const insuranceOptions = [
    {
      name: 'Life Term Insurance',
      path: 'Life',
      description: 'Provides coverage for a specified period with death benefits.',
      image: lifeInsuranceImage, 
    },
    {
      name: 'Health Insurance',
      path: 'Health',
      description: 'Covers medical expenses for illness or injuries.',
      image: healthInsuranceImage, 
    },
    {
      name: 'Car Insurance',
      path: 'Car',
      description: 'Protects against damages to your car or others.',
      image: carInsuranceImage, 
    },
    {
      name: 'Home Insurance',
      path: 'Home',
      description: 'Safeguards your home against risks and damages.',
      image: homeInsuranceImage, 
    },
  ];

  return (
    <div className="flex flex-col items-center h-full py-10 bg-gray-50">
      <h1 className="text-4xl font-bold mb-12 text-gray-800">Our Insurance Plans</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {insuranceOptions.map((option) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            key={option.name}
            onClick={() => navigate(`/insurance/${option.path}`)}
            className="cursor-pointer bg-white text-gray-900 rounded-lg shadow-lg p-5 hover:shadow-2xl transition duration-300"
            style={{ width: '240px' }} 
          >
            <div className="mb-4">
              <img
                src={option.image}
                alt={`${option.name}`}
                className="h-36 w-full object-contain rounded-md" 
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{option.name}</h2>
            <p className="text-sm text-gray-600 mb-4">{option.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
