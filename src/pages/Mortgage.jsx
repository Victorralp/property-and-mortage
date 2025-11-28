import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiDollarSign, FiCalendar, FiPercent, FiCheckCircle } from 'react-icons/fi';
import { getMortgageProducts, calculateMonthlyPayment } from '../services/mortgageService';
import { useApp } from '../context/AppContext';
import Loader from '../components/common/Loader';

const Mortgage = () => {
  const [mortgages, setMortgages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { formatCurrency } = useApp();

  // Calculator state
  const [calculator, setCalculator] = useState({
    loanAmount: 5000000,
    interestRate: 15,
    loanTerm: 20
  });
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  useEffect(() => {
    loadMortgages();
  }, []);

  useEffect(() => {
    calculatePayment();
  }, [calculator]);

  const loadMortgages = async () => {
    try {
      // Mock mortgage data
      const mockMortgages = [
        {
          id: '1',
          name: 'Standard Mortgage',
          bank: 'Access Bank',
          interestRate: 15,
          maxTerm: 20,
          minDownPayment: 10,
          maxLoanAmount: 50000000,
          features: ['Flexible repayment', 'No hidden fees', 'Quick approval'],
          eligibility: ['Minimum income: ₦200,000/month', 'Valid employment', 'Good credit score']
        },
        {
          id: '2',
          name: 'NHF Loan',
          bank: 'FMBN',
          interestRate: 6,
          maxTerm: 30,
          minDownPayment: 10,
          maxLoanAmount: 15000000,
          features: ['Low interest rate', 'Long tenure', 'Government backed'],
          eligibility: ['Must be NHF contributor', 'Nigerian citizen', 'First-time buyer priority']
        },
        {
          id: '3',
          name: 'Premium Mortgage',
          bank: 'GTBank',
          interestRate: 12,
          maxTerm: 25,
          minDownPayment: 20,
          maxLoanAmount: 100000000,
          features: ['Competitive rates', 'Premium service', 'Fast processing'],
          eligibility: ['Minimum income: ₦500,000/month', 'Excellent credit score', 'Stable employment']
        }
      ];

      setMortgages(mockMortgages);
    } catch (error) {
      console.error('Error loading mortgages:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculatePayment = () => {
    const result = calculateMonthlyPayment(
      calculator.loanAmount,
      calculator.interestRate,
      calculator.loanTerm
    );
    setMonthlyPayment(result);
  };

  const handleCalculatorChange = (key, value) => {
    setCalculator(prev => ({
      ...prev,
      [key]: parseFloat(value) || 0
    }));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Mortgage Services - Naija Property Marketplace</title>
        <meta 
          name="description" 
          content="Find the best mortgage products in Nigeria. Compare rates, calculate payments, and get personalized mortgage matching." 
        />
      </Helmet>

      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="gradient-bg text-white py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Mortgage
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              Compare mortgage products from leading Nigerian banks and get AI-powered recommendations
            </p>
          </div>
        </div>

        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mortgage Calculator */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Mortgage Calculator</h2>

                <div className="space-y-6">
                  {/* Loan Amount */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Amount
                    </label>
                    <div className="relative">
                      <FiDollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="number"
                        value={calculator.loanAmount}
                        onChange={(e) => handleCalculatorChange('loanAmount', e.target.value)}
                        className="input pl-12"
                      />
                    </div>
                    <input
                      type="range"
                      min="1000000"
                      max="100000000"
                      step="100000"
                      value={calculator.loanAmount}
                      onChange={(e) => handleCalculatorChange('loanAmount', e.target.value)}
                      className="w-full mt-2"
                    />
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interest Rate (%)
                    </label>
                    <div className="relative">
                      <FiPercent className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="number"
                        value={calculator.interestRate}
                        onChange={(e) => handleCalculatorChange('interestRate', e.target.value)}
                        className="input pl-12"
                        step="0.1"
                      />
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="25"
                      step="0.5"
                      value={calculator.interestRate}
                      onChange={(e) => handleCalculatorChange('interestRate', e.target.value)}
                      className="w-full mt-2"
                    />
                  </div>

                  {/* Loan Term */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Term (Years)
                    </label>
                    <div className="relative">
                      <FiCalendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="number"
                        value={calculator.loanTerm}
                        onChange={(e) => handleCalculatorChange('loanTerm', e.target.value)}
                        className="input pl-12"
                      />
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="30"
                      step="1"
                      value={calculator.loanTerm}
                      onChange={(e) => handleCalculatorChange('loanTerm', e.target.value)}
                      className="w-full mt-2"
                    />
                  </div>

                  {/* Results */}
                  {monthlyPayment && (
                    <div className="bg-primary-50 rounded-lg p-6 border-2 border-primary-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Monthly Payment</h3>
                      <p className="text-4xl font-bold text-primary-600 mb-4">
                        {formatCurrency(monthlyPayment.monthlyPayment)}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Payment:</span>
                          <span className="font-semibold">{formatCurrency(monthlyPayment.totalPayment)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Interest:</span>
                          <span className="font-semibold">{formatCurrency(monthlyPayment.totalInterest)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mortgage Products */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Mortgage Products</h2>

              <div className="space-y-6">
                {mortgages.map((mortgage) => (
                  <div key={mortgage.id} className="card p-6 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{mortgage.name}</h3>
                        <p className="text-gray-600">{mortgage.bank}</p>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <p className="text-sm text-gray-600 mb-1">Interest Rate</p>
                        <p className="text-3xl font-bold text-primary-600">{mortgage.interestRate}%</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 pb-6 border-b">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Max Loan Amount</p>
                        <p className="font-semibold text-gray-900">{formatCurrency(mortgage.maxLoanAmount)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Min Down Payment</p>
                        <p className="font-semibold text-gray-900">{mortgage.minDownPayment}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Max Term</p>
                        <p className="font-semibold text-gray-900">{mortgage.maxTerm} years</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {mortgage.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <FiCheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Eligibility</h4>
                        <ul className="space-y-2">
                          {mortgage.eligibility.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <FiCheckCircle className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                              <span className="text-gray-600 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button className="btn-primary w-full">Apply Now</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mortgage;
