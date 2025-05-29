import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import { TbArrowNarrowUp, TbArrowNarrowDown } from "react-icons/tb";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function ForumPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [replyContent, setReplyContent] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState('');
    const [replyingTo, setReplyingTo] = useState(null);
    const [loadingVotes, setLoadingVotes] = useState({});
    const [submittingComment, setSubmittingComment] = useState(false);
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editingContent, setEditingContent] = useState('');
    const [expandedReplies, setExpandedReplies] = useState({});

    useEffect(() => {
        fetchPost();
        fetchComments();
    }, [id]);

    const handleVote = async (postId, type) => {
        setLoadingVotes(prev => ({ ...prev, [`post-${type}`]: true }));
        try {
            await api.post(`/posts/${postId}/${type}`);
            fetchPost();
        } catch (error) {
            console.error(`Error trying to ${type}:`, error);
        } finally {
            setLoadingVotes(prev => ({ ...prev, [`post-${type}`]: false }));
        }
    };

    const fetchPost = async () => {
        const res = await api.get(`/posts/${id}`);
        setPost(res.data.data);
    };

    const fetchComments = async () => {
        const res = await api.get(`/comments/post/${id}`);
        setComments(res.data.data);
    };

    const toggleReplies = (commentId) => {
  setExpandedReplies(prev => ({
    ...prev,
    [commentId]: !prev[commentId]
  }));
};

    const handleCommentSubmit = async (e, parentComment = null) => {
        e.preventDefault();
        setSubmittingComment(true);

        const content = parentComment ? replyContent[parentComment] : newComment;
        if (!content.trim()) return;

        try {
            await api.post(`/comments/post/${id}`, {
                content,
                parentComment
            });

            if (parentComment) {
                setReplyContent(prev => ({ ...prev, [parentComment]: '' }));
                setReplyingTo(null);
            } else {
                setNewComment('');
            }

            fetchComments();
        } catch (error) {
            console.error('Comment submission failed:', error);
        } finally {
            setSubmittingComment(false);
        }
    };

    const handleEdit = () => {
        setEditContent(post.body);
        setIsEditing(true);
    };

    const handleEditComment = (commentId, currentContent) => {
        setEditingCommentId(commentId);
        setEditingContent(currentContent);
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

    const handleEditCommentSubmit = async () => {
        try {
            await api.put(`/comments/${editingCommentId}`, {
                content: editingContent,
            });
            setEditingCommentId(null);
            setEditingContent('');
            fetchComments();
        } catch (err) {
            console.error('Failed to update comment', err);
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

    const handleDeleteComment = async (commentID) => {
        if (window.confirm('Are you sure you want to delete this comment?')) {
            try {
                await api.delete(`/comments/${commentID}`);
                fetchComments();
            } catch (err) {
                console.error('Delete failed', err);
            }
        }
    }

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

            {/* Top-level Comment Form */}
            <form onSubmit={(e) => handleCommentSubmit(e)} className="mb-6 space-y-2">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full p-2 border rounded-md"
                    rows="3"
                    required
                ></textarea>

                <div className="flex items-center gap-2">
                    <button
                        type="submit"
                        disabled={submittingComment}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                    >
                        {submittingComment ? 'Posting...' : 'Post Comment'}
                    </button>

                    <button
                        type="button"
                        onClick={() => handleVote(post._id, 'upvote')}
                        disabled={loadingVotes[`post-upvote`]}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center space-x-2 disabled:opacity-50"
                    >
                        <TbArrowNarrowUp /> <p>({post.upvotes.length})</p>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleVote(post._id, 'downvote')}
                        disabled={loadingVotes[`post-downvote`]}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center space-x-2 disabled:opacity-50"
                    >
                        <TbArrowNarrowDown /> <p>({post.downvotes.length})</p>
                    </button>
                </div>
            </form>

            {/* Comments */}
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            {[...comments].reverse().map((comment) => (
                <div key={comment._id} className="mb-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">{comment.author?.name}</p>

                        {/* comment content and its editing box  */}
                        {editingCommentId === comment._id ? (
                            <div className="mt-2">
                                <textarea
                                    value={editingContent}
                                    onChange={(e) => setEditingContent(e.target.value)}
                                    className="w-full p-2 border rounded"
                                    rows="2"
                                />
                                <div className="mt-2 flex space-x-2">
                                    <button
                                        onClick={handleEditCommentSubmit}
                                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-green-700"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setEditingCommentId(null)}
                                        className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-800">{comment.content}</p>
                        )}

                        {/* edit delete reply collapse comments  */}
                        <div className="flex items-center justify-between mt-2">
                            <div className='flex items-center space-x-2'>
                                <button
                                    onClick={() => setReplyingTo(comment._id)}
                                    className="text-blue-600 text-sm hover:underline ml-4"
                                >
                                    Reply
                                </button>

                                {user && comment.author?._id === user.id && (
                                    <>
                                    <button
                                        onClick={() => handleEditComment(comment._id, comment.content)}
                                        className="text-yellow-600 text-sm hover:underline ml-4"
                                    >
                                        Edit
                                    </button>
                                <button
                                    onClick={() => handleDeleteComment(comment._id)}
                                    className="text-red-600 text-sm hover:underline ml-4"
                                >
                                    Delete
                                </button>
                                    
                                    </>
                                )}

                            </div>

                            <div className='mr-3 text-xs text-gray-400 flex items-center space-x-2'>
                                <p>
                                    Replies {`(${comment.replies?.length})`}
                                </p>
                                

                                <div onClick={() => toggleReplies(comment._id)} className='hover:text-black cursor-pointer' >

                               {expandedReplies[comment._id] ? <FaChevronUp /> : <FaChevronDown />} 
                                </div>
                                
                            </div>

                        </div>
                    </div>

                    {/* Reply Form for comments */}
                    {replyingTo === comment._id && (
                        <form
                            onSubmit={(e) => handleCommentSubmit(e, comment._id)}
                            className="mt-2 ml-4"
                        >
                            <textarea
                                value={replyContent[comment._id] || ''}
                                onChange={(e) => setReplyContent(prev => ({ ...prev, [comment._id]: e.target.value }))}
                                placeholder="Write a reply..."
                                className="w-full p-2 border rounded-md"
                                rows="2"
                                required
                            ></textarea>
                            <div className="mt-1 flex space-x-2">
                                <button
                                    type="submit"
                                    disabled={submittingComment}
                                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                                >
                                    {submittingComment ? 'Replying...' : 'Reply'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setReplyingTo(null)}
                                    className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}

                    {/* edit delete replies  */}
                    {expandedReplies[comment._id] && comment.replies?.length > 0 && (
                        <div className="ml-6 mt-2 space-y-2">
                            {comment.replies.map((reply) => (
                                <div key={reply._id} className="bg-white border-l-4 border-blue-300 p-2 rounded-md">
                                    <p className="text-sm text-gray-600">{reply.author?.name}</p>
                                    {editingCommentId === reply._id ? (
                                        <div className="mt-2">
                                            <textarea
                                                value={editingContent}
                                                onChange={(e) => setEditingContent(e.target.value)}
                                                className="w-full p-2 border rounded"
                                                rows="2"
                                            />
                                            <div className="mt-2 flex space-x-2">
                                                <button
                                                    onClick={handleEditCommentSubmit}
                                                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-green-700"
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    onClick={() => setEditingCommentId(null)}
                                                    className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <p>{reply.content}</p>
                                    )}
                                    <div className="flex items-center space-x-2 mt-2">
                                        {user && reply.author?._id === user.id && (
                                            <>
                                            <button
                                                onClick={() => handleEditComment(reply._id, reply.content)}
                                                className="text-yellow-600 text-sm hover:underline ml-4"
                                            >
                                                Edit
                                            </button>
                                        <button
                                            onClick={() => handleDeleteComment(reply._id)}
                                            className="text-red-600 text-sm hover:underline ml-4"
                                        >
                                            Delete
                                        </button>
                                        </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
