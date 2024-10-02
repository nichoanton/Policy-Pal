import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden bg-gray-100">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/options')}
        className="text-xl font-bold bg-teal-500 text-white py-4 px-10 rounded-full shadow-xl hover:bg-teal-600 transition-all duration-300 ease-in-out transform hover:shadow-2xl"
      >
        Get Started
      </motion.button>
    </div>
  );
}
