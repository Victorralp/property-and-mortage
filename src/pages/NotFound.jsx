import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiHome } from 'react-icons/fi';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <FiHome size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
