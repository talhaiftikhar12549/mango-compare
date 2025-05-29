import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import Select from "react-select";
import { TiHome } from "react-icons/ti";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
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

  // const categories = [
  //   { value: "recents", label: "Recent Posts" },
  //   { value: "popular", label: "Most Popular" },
  //   { value: "recommended", label: "Recommended" },
  // ];

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

  console.log("posts", posts);
  return (
    <div className="max-w-[1280px] w-[100%] lg:px-[40px] xl:px-0 px-[16px]">
      {/* <h1 className="py-[20px]" >Forums</h1> */}
      <div className="w-[100%] flex justify-between items-center mb-6">
        <div className="w-25%"></div>
        <div className="w-[75%]">
          <div className="flex space-x-4 justify-end">
            {/* <Select
              defaultValue={selectedCategory}
              onChange={setSelectedCategory}
              options={categories}
            /> */}

            {user && (
              <button
                onClick={() => setShowModal(true)}
                className="bg-[#FCC821] text-white px-4 py-2 rounded hover:bg-yellow-300 cursor-pointer"
              >
                Create Post
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex space-x-5 py-10">
        {/* left panel  */}
        <div className="w-[25%]  border-r border-gray-300">
          <div className=" py-[10px] ">
            <h2
              onClick={() =>
                setSelectedCategory({
                  value: "recents",
                  label: "Recent Posts",
                })
              }
              className={`text-lg text-[18px] font-[600] px-[18px] py-[12px] cursor-pointer flex items-center justify-star gap-2 ${
                selectedCategory.value === "recents"
                  ? " text-[#FCC821] font-semibold bg-[#fffaec]"
                  : "text-gray-700 hover:text-[#FCC821]"
              }`}
            >
              <TiHome />
              Home
            </h2>
            <h2
              onClick={() =>
                setSelectedCategory({
                  value: "popular",
                  label: "Most Popular",
                })
              }
              className={`text-lg text-[18px] font-[600] px-[18px] py-[12px] cursor-pointer flex items-center justify-star gap-2 ${
                selectedCategory.value === "popular"
                  ? " text-[#FCC821] font-semibold bg-[#fffaec]"
                  : "text-gray-700 hover:text-[#FCC821]"
              }`}
            >
              <BsArrowUpRightCircleFill />
              Popular
            </h2>
          </div>

          <div className="border-t border-gray-300 pt-5">
            <h2 className="text-lg text-[14px] text-gray-300 font-[600] px-[18px] py-[12px] ">
              Communities
            </h2>
          </div>

          <div className="w-full   space-y-3 px-[20px]">
            {communities.map((community, index) => (
              <div className=" py-[8px]" key={index}>
                <div
                  onClick={() => setSelectedCommunity(community)}
                  className={`flex space-x-2 cursor-pointer py-[8px] hover:bg-[#fffaec]  p-[16px] rounded-[6px] transition-colors duration-300 ease-in-out ${
                    selectedCommunity.value === community.value
                      ? "text-[#FCC821] font-semibold bg-[#fffaec]"
                      : "text-gray-500 hover:text-[#FCC821]"
                  }`}
                >
                  <p className="">{community.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* communitiesy cards  */}
        <div className="w-[75%] space-y-4 flex flex-col items-center">
          <div className="w-full">
            <div className="flex space-x-4 w-[100%] items-center justify-center">
              <div className="flex items-center w-[50%]">
                <input
                  type="search"
                  value={search}
                  onChange={handleSearch}
                  placeholder="Search..."
                  className="w-full border-2 border-[#FCC821] rounded-[10px] py-[8px] pl-2 pr-7 py-1.5 text-gray-400"
                />

                <IoSearchOutline className="-ml-7 text-gray-400" />
              </div>
            </div>
          </div>
          <div>
            {/* {!selectedCommunity ? <p>data laoading</p> : <p>it loaded</p>} */}
          </div>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div className="w-full" key={post._id} id={post._id}>
                <PostsCard post={post} fetchPosts={fetchPosts} />
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
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
