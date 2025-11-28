import { Helmet } from 'react-helmet-async';
import { FiTrendingUp, FiDollarSign, FiHome, FiUsers } from 'react-icons/fi';

const Analytics = () => {
  const stats = [
    { icon: FiHome, label: 'Total Properties', value: '10,245', change: '+12%', color: 'blue' },
    { icon: FiDollarSign, label: 'Avg. Price', value: '₦3.5M', change: '+8%', color: 'green' },
    { icon: FiUsers, label: 'Active Users', value: '5,432', change: '+15%', color: 'purple' },
    { icon: FiTrendingUp, label: 'Transactions', value: '1,234', change: '+20%', color: 'orange' },
  ];

  return (
    <>
      <Helmet>
        <title>Analytics Dashboard - Naija Property Marketplace</title>
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        <div className="gradient-bg text-white py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
            <p className="text-gray-100">Market insights and trends for investors</p>
          </div>
        </div>

        <div className="container-custom py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="card p-6">
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`text-${stat.color}-600`} size={24} />
                  </div>
                  <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <p className={`text-sm text-${stat.color}-600 font-medium`}>{stat.change} from last month</p>
                </div>
              );
            })}
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium Analytics</h2>
            <p className="text-gray-600 mb-6">
              Upgrade to our premium plan to access detailed market analytics, property performance metrics, and AI-powered investment insights.
            </p>
            <button className="btn-primary">Upgrade to Premium</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
