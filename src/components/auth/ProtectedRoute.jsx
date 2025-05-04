import { Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { checkAuthStatus } from '../../services/authService';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [isAllowed, setIsAllowed] = useState(null); // null = loading
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await checkAuthStatus(); // if successful, user is allowed
        setIsAllowed(true);
      } catch (err) {
        setIsAllowed(false);
        setError(err);
      }
    };

    checkAuth();
  }, []);

  if (error) {
    console.log("an error occured while accesing protected route", error);
    
  }
  if (isAllowed === null) {
    return <div>Loading...</div>; // Optional: loading state
  }

  if (!isAllowed) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
