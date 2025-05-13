import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

const FormDetails = () => {
    const { logout } = useAuth();

  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchForms = async () => {
    try {
      const res = await api.get("/contact");
      setForms(res.data.data);
      
    } catch (error) {
      console.error("Failed to fetch contact forms:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this form submission?")) return;

    try {
      await api.delete(`/contact/${id}`);
      setForms((prev) => prev.filter((form) => form._id !== id));
    } catch (error) {
      console.error("Failed to delete form:", error);
      alert("Failed to delete. Please try again.");
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  return (
      <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Forms Info Admin</h1>
        <div className="flex justify-center items-center space-x-5">
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden mt-20">
      {loading ? (
        <div className="p-8 text-center">Loading forms...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">First Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {forms.length > 0 ? (
                forms.map((form) => (
                  <tr key={form._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleDelete(form._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{form.firstName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{form.lastName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{form.email}</td>
                    <td className="px-6 py-4">{form.message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                    No contact form submissions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>

    </div>
  );
};

export default FormDetails;
