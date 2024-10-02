import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

export default function Navbar() {
  return (
    <div className="w-full py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white flex justify-between items-center px-10 shadow-md">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Policy Pal Logo" className="h-12 w-12 object-contain" />
        <Link to="/" className="text-xl font-bold">
          Policy Pal - Your Credible Insurance Pal
        </Link>
      </div>

      <div className="flex space-x-6">
        <Link to="/" className="hover:underline text-lg font-bold">Home</Link>
        <Link to="/options" className="hover:underline text-lg font-bold">Options</Link>
      </div>
    </div>
  );
}
