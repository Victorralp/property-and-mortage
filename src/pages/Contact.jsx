import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiMail, FiPhone, FiMapPin, FiClock, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { CONTACT_INFO } from '../utils/constants';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setLoading(false);
  };

  const faqs = [
    {
      question: 'How do I search for properties?',
      answer: 'You can search for properties using our advanced search bar on the homepage. Filter by location, price range, property type, and more to find your perfect home.'
    },
    {
      question: 'How does the AI rent prediction work?',
      answer: 'Our AI analyzes various factors including location, property type, size, amenities, and market trends to predict fair rent prices with high accuracy.'
    },
    {
      question: 'What documents do I need for a mortgage application?',
      answer: 'Typically, you\'ll need valid identification, proof of income, bank statements, and employment verification. Specific requirements vary by lender.'
    },
    {
      question: 'Are all properties verified?',
      answer: 'Yes, all properties on our platform undergo verification to ensure authenticity and prevent fraud.'
    },
    {
      question: 'How can I schedule a property viewing?',
      answer: 'Click on any property listing and use the "Schedule Viewing" button to contact the agent directly.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Naija Property Marketplace</title>
        <meta name="description" content="Get in touch with Naija Property Marketplace. We're here to help you find your dream home." />
      </Helmet>

      <div className="bg-gray-50">
        {/* Hero */}
        <div className="gradient-bg text-white py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              Have questions? We're here to help you on your property journey
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="input"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="property">Property Question</option>
                        <option value="mortgage">Mortgage Question</option>
                        <option value="technical">Technical Support</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="input"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Office */}
              <div className="card p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <FiMapPin className="text-primary-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Our Office</h3>
                <p className="text-gray-600 text-sm">{CONTACT_INFO.address}</p>
              </div>

              {/* Phone */}
              <div className="card p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FiPhone className="text-green-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-600 text-sm hover:text-primary-600">
                  {CONTACT_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div className="card p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FiMail className="text-blue-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 text-sm hover:text-primary-600">
                  {CONTACT_INFO.email}
                </a>
              </div>

              {/* Hours */}
              <div className="card p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <FiClock className="text-orange-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Working Hours</h3>
                <p className="text-gray-600 text-sm">{CONTACT_INFO.workingHours}</p>
              </div>

              {/* Social Media */}
              <div className="card p-6">
                <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href={CONTACT_INFO.socialMedia.facebook} target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                    <FiFacebook size={20} />
                  </a>
                  <a href={CONTACT_INFO.socialMedia.twitter} target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                    <FiTwitter size={20} />
                  </a>
                  <a href={CONTACT_INFO.socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                    <FiInstagram size={20} />
                  </a>
                  <a href={CONTACT_INFO.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                    <FiLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
