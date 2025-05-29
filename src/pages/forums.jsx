import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import Select from "react-select";

// icons
import { IoSearchOutline } from "react-icons/io5";
import { PostsCard } from "../components/Forums/PostsCard";

export default function Forums() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState({
    value: "recents",
    label: "Recent Posts",
  });
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [selectedCommunity, setSelectedCommunity] = useState({
    value: "",
    label: "All",
  });
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
    let sortParam = "";
    if (selectedCategory.value === "popular") sortParam = "upvoteCount";
    else if (selectedCategory.value === "recents") sortParam = "-createdAt";

    const res = await api.get("/posts", {
      params: {
        search,
        sort: sortParam,
        community:
          selectedCommunity.value !== "" ? selectedCommunity.value : undefined,
      },
    });
    setPosts(res.data.data);
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
    <div className="w-full max-w-[1280px] mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <h1 className="text-3xl font-bold">Home</h1>
          <Select
            defaultValue={selectedCategory}
            onChange={setSelectedCategory}
            options={categories}
          />

          <div className="flex items-center">
            <input
              type="search"
              value={search}
              onChange={handleSearch}
              placeholder="Search..."
              className="w-full border border-gray-300 rounded pl-2 pr-7 py-1.5"
            />

            <IoSearchOutline className="-ml-7 text-gray-400" />
          </div>
        </div>

        {user && (
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#FCC821] text-white px-4 py-2 rounded hover:bg-yellow-300 cursor-pointer"
          >
            Create Post
          </button>
        )}
      </div>

      <div className="w-full flex space-x-5 py-10">
        {/* left panel  */}
        <div className="w-[25%] border border-[#DCDCDC] p-[20px] rounded-[10px] shadow-md">
          <h2 className="text-lg font-semibold">Communities</h2>

          <div className="w-full px-5 py-5 space-y-3">
            {communities.map((community, index) => (
              <div
                key={index}
                onClick={() => setSelectedCommunity(community)}
                className={`flex space-x-2 cursor-pointer ${
                  selectedCommunity.value === community.value
                    ? "text-[#FCC821] font-semibold"
                    : "text-black hover:text-[#FCC821]"
                }`}
              >
                <p>{`>`}</p>
                <p>{community.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* communitiesy cards  */}
        <div className="w-[75%] space-y-4 flex flex-col items-center">
          {posts.map((post) => {
            return (
              <div className="w-full" id={post._id}>
                <PostsCard post={post} fetchPosts={fetchPosts} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Create a New Post</h2>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Title</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  value={newPost.title}
                  onChange={(e) =>
                    setNewPost({ ...newPost, title: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Body</label>
                <textarea
                  className="w-full border p-2 rounded"
                  rows="4"
                  value={newPost.body}
                  onChange={(e) =>
                    setNewPost({ ...newPost, body: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              <div className="">
                <label className="block text-sm font-medium"> Community</label>
                <select
                  value={newPost.community || ""}
                  onChange={(e) =>
                    setNewPost({ ...newPost, community: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                  required
                >
                  <option value="" disabled>
                    Select community
                  </option>
                  {communities
                    .filter((c) => c.name !== "All")
                    .map((c, index) => (
                      <option key={index} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FCC821] text-white py-2 rounded hover:bg-yellow-300 cursor-pointer"
              >
                Post
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
