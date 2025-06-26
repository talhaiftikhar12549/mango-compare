import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import Select from "react-select";
import { TiHome } from "react-icons/ti";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { PostsCard } from "../components/Forums/PostsCard";
import ForumPageSkeleton from "../components/ForumPageSkeleton";
import { HiMenu, HiX } from "react-icons/hi";
import { ImLeaf } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import PostSkeleton from "../components/postSkeleton";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState({
    value: "recents",
    label: "Recent Posts",
  });
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [selectedCommunity, setSelectedCommunity] = useState({
    value: "",
    label: "All",
  });
  const [showSidebar, setShowSidebar] = useState(false);

  const { user } = useAuth();

  const categories = [
    { value: "recents", label: "Recent Posts" },
    { value: "popular", label: "Most Popular" },
    { value: "recommended", label: "Recommended" },
  ];

  const communities = [
    { value: "", label: "All" },
    { value: "General Discussion", label: "General Discussion" },
    { value: "Wegovy Experience", label: "Wegovy Experience" },
    { value: "Mounjaro Experience", label: "Mounjaro Experience" },
    { value: "Lifestyle & Diet", label: "Lifestyle & Diet" },
    { value: "News & Research", label: "News & Research" },
  ];

  useEffect(() => {
    fetchPosts();
  }, [search, selectedCategory?.value, selectedCommunity]);

  const fetchPosts = async () => {
    setIsLoading(true);
    let sortParam = "";
    if (selectedCategory.value === "popular") sortParam = "upvoteCount";
    else if (selectedCategory.value === "recents") sortParam = "-createdAt";

    try {
      const res = await api.get("/posts", {
        params: {
          search,
          sort: sortParam,
          community:
            selectedCommunity.value !== ""
              ? selectedCommunity.value
              : undefined,
        },
      });
      setPosts(res.data.data);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
    setIsLoading(false);
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      await api.post("/posts", newPost);
      setShowModal(false);
      setNewPost({ title: "", body: "" });
      fetchPosts();
    } catch (err) {
      console.error("Post creation failed:", err);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
        <div className="w-full lg:px-[40px] xl:px-0 px-[16px]">
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-5 py-10 relative">

            {/* Right panel: posts section */}
            <div className="w-full  space-y-4 flex flex-col items-center">
              <div className="flex justify-end w-full mb-6">
                {user && (
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-[#FCC821] text-white px-4 py-2 rounded hover:bg-yellow-300 cursor-pointer"
                  >
                    Create Post
                  </button>
                )}
              </div>

              <div className="w-full flex items-center justify-center">
                <div className="flex items-center w-[90%] md:w-[50%]">
                  <input
                    type="search"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search..."
                    className="w-full border-2 border-[#FCC821] rounded-[10px] py-[8px] pl-2 pr-7 text-gray-400"
                  />
                  <IoSearchOutline className="-ml-7 text-gray-400" />
                </div>
              </div>

              {isLoading ? (
            <ForumPageSkeleton />
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <div className="w-full" key={post._id}>
                <PostsCard post={post} fetchPosts={fetchPosts}/>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No posts available.</p>
          )}

              {/* {posts.length > 0 ? (
                posts.map((post) => (
                  <div className="w-full" key={post._id}>
                    <PostsCard
                      post={post}
                      fetchPosts={fetchPosts}
                      // isLoading={isLoading}
                    />
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No posts available.</p>
              )} */}
            </div>
          </div>

          {showModal && (
            <>
              <div
                className="fixed p-2 inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition duration-300"
                onClick={() => setShowModal(false)} // close when clicking the backdrop
              >
                <div
                  className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full transform scale-100 transition duration-300 relative"
                  onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                >
                  {/* Header */}
                  <div className="relative flex items-center justify-between mb-4">
                    <h2 className="text-[22px] border-b border-[#E4E4E4] pb-[10px] font-[700] text-[#070707] mb-4 text-center w-full">
                      Create a New Post <br />
                      <span className="text-[14px] sm:text-[16px] font-[500] leading-0">
                        Fill in the details below to publish your content
                      </span>
                    </h2>
                    <div
                      onClick={() => setShowModal(false)}
                      className="absolute text-[30px] flex items-center right-0 top-0 cursor-pointer text-gray-500 hover:text-red-500"
                    >
                      <IoClose />
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleCreatePost} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#333]">
                        Title
                      </label>
                      <input
                        type="text"
                        className="w-full border border-[#ccc] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#FCC821]"
                        value={newPost.title}
                        onChange={(e) =>
                          setNewPost({ ...newPost, title: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#333]">
                        Body
                      </label>
                      <textarea
                        className="w-full border border-[#ccc] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#FCC821]"
                        rows="4"
                        value={newPost.body}
                        onChange={(e) =>
                          setNewPost({ ...newPost, body: e.target.value })
                        }
                        required
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#333]">
                        Community
                      </label>
                      <select
                        value={newPost.community || ""}
                        onChange={(e) =>
                          setNewPost({ ...newPost, community: e.target.value })
                        }
                        className="w-full border border-[#ccc] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#FCC821]"
                        required
                      >
                        <option value="" disabled>
                          Select community
                        </option>
                        {communities
                          .filter((c) => c.value !== "")
                          .map((c, index) => (
                            <option key={index} value={c.value}>
                              {c.label}
                            </option>
                          ))}
                      </select>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full cursor-pointer transition duration-300 mt-2 px-4 py-2 bg-[#FCC821] text-black font-semibold rounded hover:text-[#FCC821] hover:bg-[#ffffff] border-[2px] border-[#FCC821]"
                    >
                      Post
                    </button>
                  </form>
                </div>
              </div>
            </>

            //
          )}
        </div>
    </>
  );
}
