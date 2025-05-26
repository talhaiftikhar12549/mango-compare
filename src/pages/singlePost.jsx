import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext'; // Replace with your actual auth context

export default function ForumPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth(); 

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [id]);

  const fetchPost = async () => {
    const res = await api.get(`/posts/${id}`);
    setPost(res.data.data);
  };

  const fetchComments = async () => {
    const res = await api.get(`/comments/post/${id}`);
    setComments(res.data.data);
  };

  const handleCommentSubmit = async (e, parentComment = null) => {
    e.preventDefault();
    await api.post(`/comments/post/${id}`, {
      content: newComment,
      parentComment,
    });
    setNewComment('');
    fetchComments();
  };

  const handleEdit = () => {
    setEditContent(post.body);
    setIsEditing(true);
  };

  const handleEditSubmit = async () => {
    try {
      await api.put(`/posts/${post._id}`, {
        body: editContent,
      });
      setIsEditing(false);
      fetchPost();
    } catch (err) {
      console.error('Edit failed', err);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await api.delete(`/posts/${post._id}`);
        navigate('/posts');
      } catch (err) {
        console.error('Delete failed', err);
      }
    }
  };

  console.log(user, post);


  if (!post) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">by {post.author?.name}</p>

      {user && post.author?._id === user.id && (
        <div className="flex space-x-3 mb-4">
          <button
            onClick={handleEdit}
            className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      )}

      {isEditing ? (
        <div className="mb-6">
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full p-2 border rounded"
            rows="4"
          />
          <div className="mt-2 flex space-x-2">
            <button
              onClick={handleEditSubmit}
              className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <p className="mb-6">{post.body}</p>
      )}

      {/* Comment Form */}
      <form onSubmit={(e) => handleCommentSubmit(e)} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-2 border rounded-md"
          rows="3"
          required
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Post Comment
        </button>
      </form>

      {/* Comments */}
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      {comments.map((comment) => (
        <div key={comment._id} className="mb-4">
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-sm text-gray-700">{comment.author?.name}</p>
            <p className="text-gray-800">{comment.content}</p>
          </div>
          {comment.replies?.length > 0 && (
            <div className="ml-6 mt-2 space-y-2">
              {comment.replies.map((reply) => (
                <div key={reply._id} className="bg-white border-l-4 border-blue-300 p-2 rounded-md">
                  <p className="text-sm text-gray-600">{reply.author?.name}</p>
                  <p>{reply.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
