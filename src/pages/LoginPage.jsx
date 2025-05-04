import { useState } from "react";
import { useAuth } from "../context/AuthContext";


const LoginPage = ()=> {

    const { login } = useAuth();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

     const [errors, setErrors] = useState({});
      const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
         setIsSubmitting(true);
        try {
            await login({
                email: email,
                password: password,
            });
         
          navigate('/dashboard');
        } catch (error) {
          setErrors({ submit: error.response?.data?.error || 'An error occurred' });
        } finally {
          setIsSubmitting(false);
        }
      };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>

        {errors.submit && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
          {errors.submit}
        </div>
      )}


        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="you@example.com"
              onChange={(e)=> setEmail(e.target.value)}
            />

{errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="••••••••"
              onChange={(e)=> setPassword(e.target.value)}
            />

{errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Log In
          </button>
          <p className="text-center text-sm text-gray-500">
            Don't have an account? <a href="/register" className="text-purple-600 hover:underline">Sign up</a>
          </p>
        </form>
      </div>
    </div>
    )
}

export default LoginPage