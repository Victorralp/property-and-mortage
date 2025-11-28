import { FiSearch, FiCheckCircle, FiHome, FiKey } from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      icon: FiSearch,
      title: 'Search Properties',
      description: 'Browse through thousands of verified properties across Nigeria with advanced filters and AI-powered recommendations.',
      color: 'bg-blue-600'
    },
    {
      icon: FiCheckCircle,
      title: 'Get AI Predictions',
      description: 'Receive fair rent predictions and market insights powered by machine learning to make informed decisions.',
      color: 'bg-green-600'
    },
    {
      icon: FiHome,
      title: 'Find Your Match',
      description: 'Use our mortgage matching tool to connect with the best financing options tailored to your profile.',
      color: 'bg-purple-600'
    },
    {
      icon: FiKey,
      title: 'Move In',
      description: 'Complete your application with expert support and move into your dream home with confidence.',
      color: 'bg-orange-600'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-gray-600">
            Finding your perfect home is simple with our AI-powered platform. 
            Follow these four easy steps to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-600 via-purple-600 to-orange-600 opacity-20" 
               style={{ top: '80px' }}>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center font-bold text-sm text-gray-700 z-10">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`${step.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10`}>
                  <Icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
