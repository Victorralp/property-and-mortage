import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext({});

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    propertyType: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    amenities: []
  });
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [sortBy, setSortBy] = useState('newest'); // newest, price-low, price-high, popular

  // Theme state
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'light';
  });

  // Currency formatter for NGN
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  // Format date
  const formatDate = (date) => {
    if (!date) return '';
    const d = date.toDate ? date.toDate() : new Date(date);
    return new Intl.DateTimeFormat('en-NG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(d);
  };

  // Update filters
  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      propertyType: '',
      location: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: '',
      amenities: []
    });
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // Nigerian states for location filters
  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
    'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
    'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi',
    'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
    'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'FCT'
  ];

  // Property types
  const propertyTypes = [
    'Apartment',
    'House',
    'Duplex',
    'Bungalow',
    'Flat',
    'Studio',
    'Penthouse',
    'Townhouse',
    'Villa',
    'Mansion'
  ];

  // Common amenities
  const commonAmenities = [
    'Parking',
    'Security',
    'Swimming Pool',
    'Gym',
    'Generator',
    'Air Conditioning',
    'Furnished',
    'Balcony',
    'Garden',
    'Elevator',
    'Wifi',
    'Laundry',
    'Pet Friendly',
    'Playground'
  ];

  const value = {
    searchQuery,
    setSearchQuery,
    filters,
    updateFilters,
    resetFilters,
    viewMode,
    setViewMode,
    sortBy,
    setSortBy,
    theme,
    toggleTheme,
    formatCurrency,
    formatDate,
    nigerianStates,
    propertyTypes,
    commonAmenities
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
