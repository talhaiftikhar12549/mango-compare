import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    pharmacyLogo: null,
    pharmacy: '',
    dosage: '2.5 mg',
    price: '',
    discount: '',
    rating: '',
    website: ''
  });

  const dosageOptions = ['2.5 mg', '5 mg', '7.5 mg', '10 mg', '12.5 mg', '15 mg'];

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const { data } = await api.get(`/mounjaro`);
      setListings(data.data);
      setLoading(false);
    } catch (error) {
      console.log('Failed to fetch listings');
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      pharmacyLogo: e.target.files[0]
    }));
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEdit = (listing) => {
    setEditingId(listing._id);
    setFormData({
      pharmacy: listing.pharmacy,
      dosage: listing.dosage,
      price: listing.price,
      discount: listing.discount,
      rating: listing.rating,
      website: listing.website
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({
      pharmacy: '',
      dosage: '2.5 mg',
      price: '',
      discount: '',
      rating: '',
      website: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData()
    data.append('pharmacyLogo', formData.pharmacyLogo);
    data.append('pharmacy', formData.pharmacy);
    data.append('dosage', formData.dosage);
    data.append('price', formData.price);
    data.append('discount', formData.discount);
    data.append('rating', formData.rating);
    data.append('website', formData.website);

    try {
      if (editingId) {
        await api.put('/mounjaro/' + editingId, data);
        console.log('Listing updated successfully', data);
      } else {
        await api.post('/mounjaro', data);
        console.log('Listing added successfully', data);
      }
      fetchListings();
      handleCancelEdit();
    } catch (error) {
      console.log(error.response?.data?.error || 'Operation failed');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      try {
        await api.delete('/mounjaro/' + id);
        console.log('Listing deleted successfully');
        fetchListings();
      } catch (error) {
        console.log('Failed to delete listing');
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mounjaro Listings Admin</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Add/Edit Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? 'Edit Listing' : 'Add New Listing'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Logo Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Pharmacy</label>
              <input
                type="text"
                name="pharmacy"
                value={formData.pharmacy}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Dosage</label>
              <select
                name="dosage"
                value={formData.dosage}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                {dosageOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Price (£)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                min="0"
                step="0.01"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Discount (%)</label>
              <input
                type="text"
                name="discount"
                value={formData.discount}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Rating (1-5)</label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                min="0"
                max="5"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Website</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="https://example.com"
              />
            </div>
          </div>

          <div className="mt-4 flex space-x-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {editingId ? 'Update' : 'Add'} Listing
            </button>
            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">Loading listings...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Logo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pharmacy</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {listings?.map((listing) => (
                  <tr key={listing._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {console.log("image link:", listing.pharmacyLogo)
                      }
                      {listing.pharmacyLogo ? (
                        <img src={listing.pharmacyLogo} alt="Logo" className="w-16 h-16 object-contain" />
                      ) : (
                        '-'
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{listing.pharmacy}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{listing.dosage}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${listing.price.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{listing.discount}%</td>
                    <td className="px-6 py-4 whitespace-nowrap">{listing.rating || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">

                      {listing.website ? (
                        <a
                          href={listing.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {listing.website || '-'}
                        </a>
                      ) : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleEdit(listing)}
                        className="text-indigo-600 hover:text-indigo-900 mr-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(listing._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;