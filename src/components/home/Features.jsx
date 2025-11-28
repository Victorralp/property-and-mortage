import { 
  FiBrain, 
  FiDollarSign, 
  FiShield, 
  FiTrendingUp, 
  FiHome, 
  FiAward 
} from 'react-icons/fi';

const Features = () => {
  const features = [
    {
      icon: FiBrain,
      title: 'AI-Driven Rent Prediction',
      description: 'Get accurate, fair rent predictions powered by machine learning algorithms analyzing market trends and property features.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: FiDollarSign,
      title: 'Mortgage Matching',
      description: 'Connect with the best mortgage products tailored to your financial profile and property preferences.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: FiHome,
      title: 'Affordable Housing',
      description: 'Access thousands of affordable properties across all 36 states in Nigeria, addressing the housing deficit.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: FiTrendingUp,
      title: 'Market Analytics',
      description: 'Premium insights and analytics for investors to make data-driven decisions on property investments.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: FiShield,
      title: 'Verified Listings',
      description: 'All properties are verified to ensure authenticity and prevent fraud, giving you peace of mind.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: FiAward,
      title: 'Expert Support',
      description: '24/7 customer support from real estate experts to guide you through your property journey.',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="gradient-text">Naija Property</span>
          </h2>
          <p className="text-lg text-gray-600">
            We're revolutionizing the Nigerian real estate market with cutting-edge technology 
            and personalized solutions for every home seeker.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card p-8 hover:scale-105 transition-transform duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
