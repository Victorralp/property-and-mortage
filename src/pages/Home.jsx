import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import FeaturedProperties from '../components/home/FeaturedProperties';
import HowItWorks from '../components/home/HowItWorks';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Naija Property Marketplace - Find Your Dream Home in Nigeria</title>
        <meta 
          name="description" 
          content="Nigeria's leading AI-powered property and mortgage marketplace. Find affordable housing with fair rent predictions and personalized mortgage matching across all 36 states." 
        />
        <meta 
          name="keywords" 
          content="Nigeria property, real estate Nigeria, affordable housing, mortgage Nigeria, rent prediction, property marketplace, Lagos property, Abuja property" 
        />
        <link rel="canonical" href="https://naijapropertymarket.com/" />
      </Helmet>

      <Hero />
      <Features />
      <FeaturedProperties />
      <HowItWorks />
      
      {/* Call to Action Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerians who have found their perfect home through our platform. 
            Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/properties" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Browse Properties
            </a>
            <a href="/register" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600">
              Get Started Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
