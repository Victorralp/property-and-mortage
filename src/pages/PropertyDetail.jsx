import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiMapPin, FiBed, FiBath, FiMaximize2, FiHeart, FiPhone, FiMail, FiShare2 } from 'react-icons/fi';
import { getPropertyById } from '../services/propertyService';
import { predictFairRent } from '../services/aiService';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import Loader from '../components/common/Loader';
import toast from 'react-hot-toast';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [aiPrediction, setAiPrediction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const { user, addToFavorites, userProfile } = useAuth();
  const { formatCurrency } = useApp();

  useEffect(() => {
    loadProperty();
  }, [id]);

  const loadProperty = async () => {
    setLoading(true);
    try {
      // Mock property data
      const mockProperty = {
        id: '1',
        title: '3 Bedroom Apartment in Lekki',
        description: 'Beautiful modern apartment with excellent amenities in a prime location. Features include spacious living areas, modern kitchen, and stunning views. Perfect for families looking for comfort and convenience.',
        location: { 
          state: 'Lagos', 
          city: 'Lekki', 
          address: 'Lekki Phase 1',
          coordinates: { lat: 6.4541, lng: 3.4697 }
        },
        price: 2500000,
        propertyType: 'Apartment',
        bedrooms: 3,
        bathrooms: 2,
        size: 120,
        images: [
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
          'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
          'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'
        ],
        amenities: ['Parking', 'Security', 'Swimming Pool', 'Gym', 'Generator', '24/7 Water'],
        status: 'active',
        yearBuilt: 2020,
        parkingSpaces: 2,
        furnished: true,
        agent: {
          name: 'John Doe',
          phone: '+234 800 000 0000',
          email: 'john@example.com',
          photo: 'https://ui-avatars.com/api/?name=John+Doe&background=22c55e&color=fff'
        }
      };

      setProperty(mockProperty);

      // Get AI prediction
      const prediction = await predictFairRent(mockProperty);
      setAiPrediction(prediction);
    } catch (error) {
      console.error('Error loading property:', error);
      toast.error('Failed to load property details');
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.title,
          text: property.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (!property) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h2>
        <Link to="/properties" className="btn-primary">
          Browse Properties
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{property.title} - Naija Property Marketplace</title>
        <meta name="description" content={property.description} />
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="card overflow-hidden mb-6">
                <div className="relative h-96">
                  <img
                    src={property.images[selectedImage]}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => addToFavorites(property.id)}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-50"
                    >
                      <FiHeart 
                        className={userProfile?.favorites?.includes(property.id) ? 'text-red-500 fill-current' : 'text-gray-700'}
                        size={24} 
                      />
                    </button>
                    <button
                      onClick={handleShare}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-50"
                    >
                      <FiShare2 size={24} />
                    </button>
                  </div>
                </div>
                <div className="p-4 flex gap-4 overflow-x-auto">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden ${
                        selectedImage === index ? 'ring-4 ring-primary-600' : ''
                      }`}
                    >
                      <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="card p-6 mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{property.title}</h1>
                <div className="flex items-center text-gray-600 mb-6">
                  <FiMapPin className="mr-2" size={20} />
                  <span>{property.location.address}, {property.location.city}, {property.location.state}</span>
                </div>

                <div className="flex items-center gap-6 mb-6 pb-6 border-b">
                  <div className="flex items-center">
                    <FiBed className="mr-2 text-primary-600" size={24} />
                    <span className="text-lg font-semibold">{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <FiBath className="mr-2 text-primary-600" size={24} />
                    <span className="text-lg font-semibold">{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center">
                    <FiMaximize2 className="mr-2 text-primary-600" size={24} />
                    <span className="text-lg font-semibold">{property.size} m²</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{property.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity, index) => (
                      <span key={index} className="badge-success">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Property Type</p>
                    <p className="font-semibold text-gray-900">{property.propertyType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Year Built</p>
                    <p className="font-semibold text-gray-900">{property.yearBuilt}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Parking</p>
                    <p className="font-semibold text-gray-900">{property.parkingSpaces} spaces</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Furnishing</p>
                    <p className="font-semibold text-gray-900">{property.furnished ? 'Furnished' : 'Unfurnished'}</p>
                  </div>
                </div>
              </div>

              {/* AI Rent Prediction */}
              {aiPrediction && (
                <div className="card p-6 bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    🤖 AI Rent Prediction
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Predicted Fair Rent</p>
                      <p className="text-3xl font-bold text-primary-600">
                        {formatCurrency(aiPrediction.predictedRent)}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        Range: {formatCurrency(aiPrediction.range.lower)} - {formatCurrency(aiPrediction.range.upper)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Confidence Score</p>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-primary-600 h-3 rounded-full"
                            style={{ width: `${aiPrediction.confidence * 100}%` }}
                          ></div>
                        </div>
                        <span className="font-semibold text-gray-900">
                          {Math.round(aiPrediction.confidence * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Price & CTA */}
              <div className="card p-6 mb-6 sticky top-24">
                <p className="text-sm text-gray-600 mb-2">Price</p>
                <p className="text-4xl font-bold text-primary-600 mb-6">
                  {formatCurrency(property.price)}
                </p>

                {user ? (
                  <Link to="/mortgage" className="btn-primary w-full mb-4">
                    Apply for Mortgage
                  </Link>
                ) : (
                  <Link to="/login" className="btn-primary w-full mb-4">
                    Login to Apply
                  </Link>
                )}

                <Link to="/contact" className="btn-outline w-full">
                  Schedule Viewing
                </Link>
              </div>

              {/* Agent Contact */}
              <div className="card p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Agent</h3>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={property.agent.photo}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{property.agent.name}</p>
                    <p className="text-sm text-gray-600">Property Agent</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <a href={`tel:${property.agent.phone}`} className="btn-outline w-full flex items-center justify-center gap-2">
                    <FiPhone size={18} />
                    <span>Call Agent</span>
                  </a>
                  <a href={`mailto:${property.agent.email}`} className="btn-outline w-full flex items-center justify-center gap-2">
                    <FiMail size={18} />
                    <span>Email Agent</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetail;
