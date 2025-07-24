import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AuthForm = ({ isLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm_password: '',
    name: isLogin ? '' : ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin && formData.password !== formData.confirm_password) {
      newErrors.confirm_password = 'Passwords do not match';
      formData.password = ''
      formData.confirm_password = ''
    }

    if (!isLogin && !formData.name) {
      newErrors.name = 'Name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      if (isLogin) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        await login(formData);
      } else {
        await register(formData);
      }
       localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('role');
      navigate('/login');
    } catch (error) {
      setErrors({ submit: error.response?.data?.error || 'An error occurred' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-300 to-[#ffe48d] flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? 'Welcome Back' : 'Create an Account'}
        </h2>

        {errors.submit && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-sm">
            {errors.submit}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-orange-200'}`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
          )}

          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-orange-200'}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-orange-200'}`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {!isLogin && (
            <div>
              <label className="block text-gray-600 mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${errors.confirm_password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-orange-200'}`}
              />
              {errors.confirm_password && (
                <p className="text-red-500 text-sm mt-1">{errors.confirm_password}</p>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center border border-orange-500 bg-orange-500 ${
              isSubmitting
                ? "opacity-60 cursor-not-allowed"
                : "hover:bg-orange-600 hover:border-orange-600 cursor-pointer"
            } text-white font-semibold py-2 rounded-md transition duration-300`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              isLogin ? 'Login' : 'Register'
            )}
          </button>

          <p className="text-center text-sm text-gray-500">
            {isLogin ? (
              <>
                Don’t have an account?{' '}
                <a href="/register" className="text-orange-500 hover:underline">
                  Register
                </a>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <a href="/login" className="text-orange-500 hover:underline">
                  Login
                </a>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
