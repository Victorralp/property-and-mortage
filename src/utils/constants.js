// Nigerian States
export const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
  'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
  'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi',
  'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
  'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'FCT'
];

// Property Types
export const PROPERTY_TYPES = [
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

// Property Status
export const PROPERTY_STATUS = {
  FOR_RENT: 'for_rent',
  FOR_SALE: 'for_sale',
  SOLD: 'sold',
  RENTED: 'rented'
};

// Amenities
export const AMENITIES = [
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
  'Playground',
  'CCTV',
  '24/7 Water',
  'Solar Power',
  'Gated Estate'
];

// Mortgage Product Types
export const MORTGAGE_TYPES = [
  'Conventional Mortgage',
  'FHA Loan',
  'NHF Loan',
  'Commercial Mortgage',
  'Construction Loan',
  'Refinance'
];

// Employment Types
export const EMPLOYMENT_TYPES = [
  'Employed',
  'Self-Employed',
  'Business Owner',
  'Retired',
  'Student',
  'Other'
];

// Application Status
export const APPLICATION_STATUS = {
  PENDING: 'pending',
  UNDER_REVIEW: 'under_review',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  COMPLETED: 'completed'
};

// Price Ranges (in NGN)
export const PRICE_RANGES = [
  { label: 'Under ₦500k', min: 0, max: 500000 },
  { label: '₦500k - ₦1M', min: 500000, max: 1000000 },
  { label: '₦1M - ₦2M', min: 1000000, max: 2000000 },
  { label: '₦2M - ₦5M', min: 2000000, max: 5000000 },
  { label: '₦5M - ₦10M', min: 5000000, max: 10000000 },
  { label: '₦10M - ₦20M', min: 10000000, max: 20000000 },
  { label: 'Above ₦20M', min: 20000000, max: Infinity }
];

// User Roles
export const USER_ROLES = {
  USER: 'user',
  AGENT: 'agent',
  INVESTOR: 'investor',
  ADMIN: 'admin'
};

// Chart Colors
export const CHART_COLORS = {
  primary: '#22c55e',
  secondary: '#ef4444',
  accent: '#f59e0b',
  info: '#3b82f6',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444'
};

// API Endpoints (if using external APIs)
export const API_ENDPOINTS = {
  PROPERTIES: '/api/properties',
  MORTGAGES: '/api/mortgages',
  USERS: '/api/users',
  AI_PREDICTION: '/api/ai/predict-rent',
  MARKET_INSIGHTS: '/api/ai/market-insights'
};

// Pagination
export const ITEMS_PER_PAGE = 12;

// Max File Upload Size (5MB)
export const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Supported Image Formats
export const SUPPORTED_IMAGE_FORMATS = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];

// Nigerian Banks
export const NIGERIAN_BANKS = [
  'Access Bank',
  'Zenith Bank',
  'GTBank',
  'First Bank',
  'UBA',
  'Fidelity Bank',
  'Union Bank',
  'Sterling Bank',
  'Stanbic IBTC',
  'Ecobank',
  'FCMB',
  'Wema Bank',
  'Polaris Bank',
  'Unity Bank',
  'Keystone Bank',
  'Heritage Bank',
  'Jaiz Bank',
  'SunTrust Bank',
  'Providus Bank',
  'Kuda Bank'
];

// Contact Information
export const CONTACT_INFO = {
  email: 'support@naijapropertymarket.com',
  phone: '+234 800 000 0000',
  address: 'Plot 123, Victoria Island, Lagos, Nigeria',
  workingHours: 'Mon - Fri: 8:00 AM - 6:00 PM',
  socialMedia: {
    facebook: 'https://facebook.com/naijapropertymarket',
    twitter: 'https://twitter.com/naijapropertymarket',
    instagram: 'https://instagram.com/naijapropertymarket',
    linkedin: 'https://linkedin.com/company/naijapropertymarket'
  }
};

export default {
  NIGERIAN_STATES,
  PROPERTY_TYPES,
  PROPERTY_STATUS,
  AMENITIES,
  MORTGAGE_TYPES,
  EMPLOYMENT_TYPES,
  APPLICATION_STATUS,
  PRICE_RANGES,
  USER_ROLES,
  CHART_COLORS,
  API_ENDPOINTS,
  ITEMS_PER_PAGE,
  MAX_FILE_SIZE,
  SUPPORTED_IMAGE_FORMATS,
  NIGERIAN_BANKS,
  CONTACT_INFO
};
