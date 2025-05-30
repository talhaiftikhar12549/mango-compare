import { useState } from "react";
import { IoArrowRedoSharp, IoChatboxOutline } from "react-icons/io5";
import { TbArrowNarrowUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";
import { TbArrowBigUpFilled } from "react-icons/tb";
import api from "../../services/api";

export const PostsCard = ({ post, fetchPosts }) => {
  const [loadingVotes, setLoadingVotes] = useState({});

  const navigate = useNavigate();

  const handleCopy = (postId) => {
    const url = `${window.location.origin}/posts/${postId}`;
    navigator.clipboard
      .writeText(url)
      .then(() => alert("Link copied to clipboard!"))
      .catch((err) => console.error("Failed to copy!", err));
  };

  const handleVote = async (postId, type) => {
    setLoadingVotes((prev) => ({ ...prev, [`post-${type}`]: true }));
    try {
      await api.post(`/posts/${postId}/${type}`);
      fetchPosts();
    } catch (error) {
      console.error(`Error trying to ${type}:`, error);
    } finally {
      setLoadingVotes((prev) => ({ ...prev, [`post-${type}`]: false }));
    }
  };

  return (
    <div className="w-[100%] flex flex-col gap-4 border-b border-gray-300  cursor-pointer transition ">
      <div className="hover:bg-[#fffaec] border-[#dcdcdc] transition-colors duration-300 ease-in-out rounded-[10px] p-4 mb-[10px]">
        <div
          onClick={() => navigate(`/posts/${post._id}`)}
          className="flex-1 space-y-2"
        >
          {/* <div className="w-full flex">
            <p className="py-1 px-2 bg-[#FCC821] rounded text-xs">
              {post.community}
            </p>
          </div> */}
          <div className="flex items-start justify-between space-x-5">
            <div className="flex gap-2">
              <div className="w-9 h-9 border  border-gray-400 text-white font-bold bg-red-700 rounded-full flex items-center justify-center text-3xl">
                {post.author?.name.slice(0, 1).toUpperCase()}
              </div>

              <div className="flex gap-4 items-center">
                <p className="text-sm text-black font-semibold mb-1">
                  {post.author?.name}
                </p>
                <p className="text-xs font-[600]">
                  {post.createdAt.slice(0, 10)}
                </p>
              </div>
            </div>

            <div>
              <div className="w-full flex">
                <p className="py-1 px-2 bg-[#FCC821] rounded text-xs">
                  {post.community}
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-lg font-semibold">{post.title}</h2>

          <p className="text-gray-700 line-clamp-3">
            {post.body?.length > 250
              ? `${post.body.slice(0, 250)}...`
              : post.body}
          </p>

          <div></div>
        </div>

        <div className="w-full flex space-x-4 text-center text-sm text-gray-500">
          <div
            disabled={loadingVotes[`post-upvote`]}
            onClick={() => handleVote(post._id, "upvote")}
            className="flex items-center space-x-3 text-black text-[14px] bg-gray-100 py-[4px] px-[10px] rounded-[5px]  hover:text-[#FCC821] transition-colors duration-300 ease-in-out "
          >
            <TbArrowBigUpFilled /> <p>{post.upvotes?.length || 0}</p>
          </div>
          <div
            onClick={() => navigate(`/posts/${post._id}`)}
            className="flex items-center space-x-2 text-black text-[14px] bg-gray-100 py-[4px] px-[10px] rounded-[5px] hover:text-[#FCC821] transition-colors duration-300 ease-in-out"
          >
            <FaMessage /> <p>{post.commentsCount || 0}</p>
          </div>
          <div
            onClick={() => handleCopy(post._id)}
            className="flex items-center space-x-2 text-black text-[14px] bg-gray-100 py-[4px] px-[10px] rounded-[5px] hover:text-[#FCC821] transition-colors duration-300 ease-in-out"
          >
            <IoArrowRedoSharp />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};
