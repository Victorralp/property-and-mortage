import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiBed, FiBath, FiMaximize2, FiHeart } from 'react-icons/fi';
import { getFeaturedProperties } from '../../services/propertyService';
import { useAuth } from '../../context/AuthContext';
import { useApp } from '../../context/AppContext';
import Loader from '../common/Loader';

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToFavorites, userProfile } = useAuth();
  const { formatCurrency } = useApp();

  useEffect(() => {
    loadFeaturedProperties();
  }, []);

  const loadFeaturedProperties = async () => {
    try {
      // Mock data for demonstration
      const mockProperties = [
        {
          id: '1',
          title: '3 Bedroom Apartment in Lekki',
          location: { state: 'Lagos', city: 'Lekki', address: 'Lekki Phase 1' },
          price: 2500000,
          propertyType: 'Apartment',
          bedrooms: 3,
          bathrooms: 2,
          size: 120,
          images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'],
          featured: true,
          status: 'active'
        },
        {
          id: '2',
          title: '4 Bedroom Duplex in Abuja',
          location: { state: 'FCT', city: 'Abuja', address: 'Maitama District' },
          price: 4500000,
          propertyType: 'Duplex',
          bedrooms: 4,
          bathrooms: 3,
          size: 200,
          images: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800'],
          featured: true,
          status: 'active'
        },
        {
          id: '3',
          title: '2 Bedroom Flat in Ibadan',
          location: { state: 'Oyo', city: 'Ibadan', address: 'Bodija' },
          price: 1200000,
          propertyType: 'Flat',
          bedrooms: 2,
          bathrooms: 2,
          size: 85,
          images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'],
          featured: true,
          status: 'active'
        },
        {
          id: '4',
          title: '5 Bedroom Villa in Port Harcourt',
          location: { state: 'Rivers', city: 'Port Harcourt', address: 'GRA' },
          price: 6000000,
          propertyType: 'Villa',
          bedrooms: 5,
          bathrooms: 4,
          size: 300,
          images: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800'],
          featured: true,
          status: 'active'
        },
        {
          id: '5',
          title: 'Studio Apartment in Enugu',
          location: { state: 'Enugu', city: 'Enugu', address: 'Independence Layout' },
          price: 800000,
          propertyType: 'Studio',
          bedrooms: 1,
          bathrooms: 1,
          size: 45,
          images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'],
          featured: true,
          status: 'active'
        },
        {
          id: '6',
          title: '3 Bedroom Bungalow in Kaduna',
          location: { state: 'Kaduna', city: 'Kaduna', address: 'Barnawa' },
          price: 1800000,
          propertyType: 'Bungalow',
          bedrooms: 3,
          bathrooms: 2,
          size: 150,
          images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800'],
          featured: true,
          status: 'active'
        }
      ];

      setProperties(mockProperties);
      setLoading(false);
    } catch (error) {
      console.error('Error loading featured properties:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader fullScreen={false} />;
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Featured <span className="gradient-text">Properties</span>
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked properties with the best value
            </p>
          </div>
          <Link to="/properties" className="btn-outline hidden md:block">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="card group overflow-hidden animate-fade-in"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => addToFavorites(property.id)}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-50 transition-colors"
                  >
                    <FiHeart 
                      className={userProfile?.favorites?.includes(property.id) ? 'text-red-500 fill-current' : 'text-gray-700'}
                      size={20} 
                    />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                    {property.title}
                  </h3>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <FiMapPin className="mr-2 flex-shrink-0" size={16} />
                  <span className="text-sm">
                    {property.location.address}, {property.location.state}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FiBed className="mr-1" size={16} />
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <FiBath className="mr-1" size={16} />
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <FiMaximize2 className="mr-1" size={16} />
                    <span>{property.size} m²</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="text-2xl font-bold text-primary-600">
                      {formatCurrency(property.price)}
                    </p>
                  </div>
                  <Link
                    to={`/properties/${property.id}`}
                    className="btn-primary text-sm px-6"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link to="/properties" className="btn-primary">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
