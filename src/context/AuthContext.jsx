import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const userData = await checkAuthStatus();
  //       setUser(userData);
  //       setIsAuthenticated(true);
  //     } catch (error) {
  //       console.error('Authentication check failed:', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   checkAuth();
  // }, []);

  const login = async (credentials) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const userData = await loginUser(credentials);
      
      setUser(userData);
      setIsAuthenticated(true);
      // Redirect to either the protected page they tried to access or home
      const redirectTo = location.state?.from?.pathname || '/mounjaro-pannel';
      navigate(redirectTo);
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const newUser = await registerUser(userData);
      setUser(newUser);
      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    // Clear token from localStorage if you're using it
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        // isLoading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);