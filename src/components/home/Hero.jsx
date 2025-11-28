import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import { useApp } from '../../context/AppContext';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();
  const { nigerianStates } = useApp();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/properties?search=${searchTerm}&location=${location}`);
  };

  return (
    <div className="relative gradient-bg text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <span className="text-sm font-medium">🏠 Nigeria's #1 Property Marketplace</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            Find Your Dream Home with{' '}
            <span className="text-accent-300">AI-Powered</span> Insights
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto animate-slide-up">
            Addressing Nigeria's housing deficit with affordable properties, 
            fair rent predictions, and personalized mortgage matching.
          </p>

          {/* Search Bar */}
          <form 
            onSubmit={handleSearch}
            className="bg-white rounded-2xl p-3 shadow-2xl max-w-3xl mx-auto animate-slide-up"
          >
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-xl">
                <FiSearch className="text-gray-400 mr-3" size={20} />
                <input
                  type="text"
                  placeholder="Search by location, property type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-400"
                />
              </div>
              
              <div className="md:w-48 flex items-center px-4 py-3 bg-gray-50 rounded-xl">
                <FiMapPin className="text-gray-400 mr-3" size={20} />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent border-none focus:outline-none text-gray-800 cursor-pointer"
                >
                  <option value="">All States</option>
                  {nigerianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
              >
                Search
              </button>
            </div>
          </form>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent-300">10K+</p>
              <p className="text-sm md:text-base text-gray-200 mt-1">Properties</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent-300">5K+</p>
              <p className="text-sm md:text-base text-gray-200 mt-1">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent-300">50+</p>
              <p className="text-sm md:text-base text-gray-200 mt-1">Mortgage Partners</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent-300">36</p>
              <p className="text-sm md:text-base text-gray-200 mt-1">States Covered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="rgb(249, 250, 251)"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
