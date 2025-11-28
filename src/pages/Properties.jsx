import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiMapPin, FiBed, FiBath, FiMaximize2, FiHeart, FiGrid, FiList } from 'react-icons/fi';
import { getProperties } from '../services/propertyService';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import Loader from '../components/common/Loader';

const Properties = () => {
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const { addToFavorites, userProfile } = useAuth();
  const { formatCurrency, nigerianStates, propertyTypes } = useApp();

  // Filters
  const [filters, setFilters] = useState({
    propertyType: '',
    location: searchParams.get('location') || '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    search: searchParams.get('search') || ''
  });

  useEffect(() => {
    loadProperties();
  }, [filters]);

  const loadProperties = async () => {
    setLoading(true);
    try {
      // Mock data for demonstration
      const mockProperties = [
        {
          id: '1',
          title: '3 Bedroom Apartment in Lekki',
          description: 'Beautiful modern apartment with excellent amenities',
          location: { state: 'Lagos', city: 'Lekki', address: 'Lekki Phase 1' },
          price: 2500000,
          propertyType: 'Apartment',
          bedrooms: 3,
          bathrooms: 2,
          size: 120,
          images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'],
          status: 'active',
          amenities: ['Parking', 'Security', 'Swimming Pool']
        },
        {
          id: '2',
          title: '4 Bedroom Duplex in Abuja',
          description: 'Luxurious duplex in prime location',
          location: { state: 'FCT', city: 'Abuja', address: 'Maitama' },
          price: 4500000,
          propertyType: 'Duplex',
          bedrooms: 4,
          bathrooms: 3,
          size: 200,
          images: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800'],
          status: 'active',
          amenities: ['Parking', 'Generator', 'CCTV']
        },
        // Add more mock properties as needed
      ];

      setProperties(mockProperties);
    } catch (error) {
      console.error('Error loading properties:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      propertyType: '',
      location: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      search: ''
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Properties for Rent & Sale in Nigeria - Naija Property Marketplace</title>
        <meta 
          name="description" 
          content="Browse thousands of verified properties for rent and sale across Nigeria. Find apartments, houses, duplexes with AI-powered rent predictions." 
        />
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 py-6">
          <div className="container-custom">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Properties</h1>
            <p className="text-gray-600">Find your perfect home from thousands of listings</p>
          </div>
        </div>

        <div className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Filters</h3>

                {/* Property Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    value={filters.propertyType}
                    onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                    className="input"
                  >
                    <option value="">All Types</option>
                    {propertyTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="input"
                  >
                    <option value="">All States</option>
                    {nigerianStates.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice}
                      onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                      className="input"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice}
                      onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                      className="input"
                    />
                  </div>
                </div>

                {/* Bedrooms */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bedrooms
                  </label>
                  <select
                    value={filters.bedrooms}
                    onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                    className="input"
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>

                <button
                  onClick={resetFilters}
                  className="btn-outline w-full"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Properties Grid/List */}
            <div className="lg:col-span-3">
              {/* Toolbar */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  <span className="font-semibold">{properties.length}</span> properties found
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600'}`}
                  >
                    <FiGrid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600'}`}
                  >
                    <FiList size={20} />
                  </button>
                </div>
              </div>

              {/* Properties */}
              {properties.length > 0 ? (
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-6'}>
                  {properties.map((property) => (
                    <div key={property.id} className="card group overflow-hidden">
                      <div className={viewMode === 'list' ? 'flex' : ''}>
                        {/* Image */}
                        <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-1/3' : 'h-56'}`}>
                          <img
                            src={property.images[0]}
                            alt={property.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <button
                            onClick={() => addToFavorites(property.id)}
                            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-50"
                          >
                            <FiHeart 
                              className={userProfile?.favorites?.includes(property.id) ? 'text-red-500 fill-current' : 'text-gray-700'}
                              size={20} 
                            />
                          </button>
                        </div>

                        {/* Content */}
                        <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                            {property.title}
                          </h3>
                          <div className="flex items-center text-gray-600 mb-4">
                            <FiMapPin className="mr-2" size={16} />
                            <span className="text-sm">{property.location.address}, {property.location.state}</span>
                          </div>

                          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <FiBed className="mr-1" />
                              {property.bedrooms} Beds
                            </div>
                            <div className="flex items-center">
                              <FiBath className="mr-1" />
                              {property.bathrooms} Baths
                            </div>
                            <div className="flex items-center">
                              <FiMaximize2 className="mr-1" />
                              {property.size} m²
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t">
                            <p className="text-2xl font-bold text-primary-600">
                              {formatCurrency(property.price)}
                            </p>
                            <Link to={`/properties/${property.id}`} className="btn-primary text-sm">
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-gray-600 text-lg">No properties found matching your criteria.</p>
                  <button onClick={resetFilters} className="btn-primary mt-4">
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
