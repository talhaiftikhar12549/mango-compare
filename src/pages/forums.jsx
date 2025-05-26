import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Forums() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await api.get('/posts');
      setPosts(res.data.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Forums</h1>
      <div className="space-y-4">
        {posts.map(post => (
          <div
            key={post._id}
            className="border p-4 rounded-xl shadow cursor-pointer hover:bg-gray-50"
            onClick={() => navigate(`/posts/${post._id}`)}
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500 text-sm">By {post.author?.name}</p>
            <p className="text-gray-700 mt-2 line-clamp-3">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
