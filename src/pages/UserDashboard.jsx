import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiHeart, FiFileText, FiUser, FiSettings, FiHome } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';

const UserDashboard = () => {
  const { user, userProfile } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FiHome },
    { id: 'favorites', label: 'Favorites', icon: FiHeart },
    { id: 'applications', label: 'Applications', icon: FiFileText },
    { id: 'profile', label: 'Profile', icon: FiUser },
    { id: 'settings', label: 'Settings', icon: FiSettings },
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard - Naija Property Marketplace</title>
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container-custom py-6">
            <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, {user?.displayName || 'User'}!</p>
          </div>
        </div>

        <div className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-4">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          activeTab === tab.id
                            ? 'bg-primary-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon size={20} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="card p-6">
                      <FiHeart className="text-red-500 mb-3" size={32} />
                      <p className="text-3xl font-bold text-gray-900">
                        {userProfile?.favorites?.length || 0}
                      </p>
                      <p className="text-gray-600">Saved Properties</p>
                    </div>
                    <div className="card p-6">
                      <FiFileText className="text-blue-500 mb-3" size={32} />
                      <p className="text-3xl font-bold text-gray-900">0</p>
                      <p className="text-gray-600">Applications</p>
                    </div>
                    <div className="card p-6">
                      <FiHome className="text-green-500 mb-3" size={32} />
                      <p className="text-3xl font-bold text-gray-900">
                        {userProfile?.searches?.length || 0}
                      </p>
                      <p className="text-gray-600">Recent Searches</p>
                    </div>
                  </div>

                  <div className="card p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Activity</h2>
                    <p className="text-gray-600">No recent activity yet. Start browsing properties!</p>
                  </div>
                </div>
              )}

              {activeTab === 'favorites' && (
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Favorite Properties</h2>
                  <p className="text-gray-600">You haven't saved any properties yet.</p>
                </div>
              )}

              {activeTab === 'applications' && (
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Mortgage Applications</h2>
                  <p className="text-gray-600">No applications submitted yet.</p>
                </div>
              )}

              {activeTab === 'profile' && (
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">My Profile</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        value={user?.displayName || ''}
                        className="input"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={user?.email || ''}
                        className="input"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="card p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
                  <p className="text-gray-600">Settings coming soon...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
