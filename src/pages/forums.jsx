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

export default function Forums() {
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
        <div className="max-w-[1280px] w-full lg:px-[40px] xl:px-0 px-[16px]">
          {/* Sidebar toggle button for small screens */}
          <div className="md:hidden flex justify-start items-center py-4">
            {/* <h2 className="text-xl font-bold">Forums</h2> */}
            <button
              className="text-2xl text-[#FCC821]"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <HiMenu />
            </button>
          </div>

          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-5 py-10 relative">
            {/* Sidebar */}
            <div
              className={`w-full md:w-[25%] md:static fixed z-50 top-0 left-0 h-full md:h-auto bg-white md:bg-transparent transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
                showSidebar ? "translate-x-0" : "-translate-x-full"
              } md:relative md:block max-w-[75%]`}
            >
              {/* Close button on mobile sidebar */}
              <div className="md:hidden flex justify-end p-4">
                <button
                  onClick={() => setShowSidebar(false)}
                  className="text-2xl text-gray-600"
                >
                  <HiX />
                </button>
              </div>

              <div className="py-[10px]">
                <h2
                  onClick={() => {
                    setSelectedCategory({
                      value: "recents",
                      label: "Recent Posts",
                    });
                    setShowSidebar(false);
                  }}
                  className={`text-lg text-[18px] font-[600] rounded-[6px] px-[18px] hover:bg-gray-50 py-[12px] cursor-pointer flex items-center justify-start gap-2 duration-300 ease-in-out ${
                    selectedCategory.value === "recents"
                      ? "text-[#FCC821] font-semibold bg-gray-50"
                      : "text-gray-700 hover:text-[#FCC821]"
                  }`}
                >
                  <TiHome />
                  Home
                </h2>

                <h2
                  onClick={() => {
                    setSelectedCategory({
                      value: "popular",
                      label: "Most Popular",
                    });
                    setShowSidebar(false);
                  }}
                  className={`text-lg text-[18px] font-[600] mt-2 px-[18px] py-[12px] rounded-[6px] hover:bg-gray-50 cursor-pointer flex items-center justify-start gap-2 duration-300 ease-in-out ${
                    selectedCategory.value === "popular"
                      ? "text-[#FCC821] font-semibold bg-gray-50"
                      : "text-gray-700 hover:text-[#FCC821]"
                  }`}
                >
                  <BsArrowUpRightCircleFill />
                  Popular
                </h2>
              </div>

              <div className="border-t border-gray-300 mt-3">
                <h2 className="text-lg text-[14px] text-gray-300 font-[600] px-[18px] py-[12px] ">
                  Communities
                </h2>
              </div>

              <div className="w-full  px-[20px]">
                {communities.map((community, index) => (
                  <div className="py-[2px] " key={index}>
                    <div
                      onClick={() => {
                        setSelectedCommunity(community);
                        setShowSidebar(false);
                      }}
                      className={`flex space-x-2 items-center cursor-pointer py-[8px] hover:bg-gray-50  p-[16px] rounded-[6px] transition-colors duration-300 ease-in-out ${
                        selectedCommunity.value === community.value
                          ? "text-[#FCC821] font-semibold bg-gray-50 "
                          : "text-gray-700 hover:text-[#FCC821]"
                      }`}
                    >
                      <ImLeaf />
                      <p className="">{community.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel: posts section */}
            <div className="w-full md:w-[75%] space-y-4 flex flex-col items-center">
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
