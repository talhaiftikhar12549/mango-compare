import { StrictMode } from "react";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { store } from "./redux toolkit/store.js";
import { Provider } from "react-redux";
import MounjaroCompare from "./pages/mounjaro-compare.jsx";
import WegovyCompare from "./pages/wegovy-compare.jsx";
import Contant from "./pages/contact-us.jsx";
import Blogs from "./pages/blogs.jsx";
import AdminDashboard from "./pages/adminDashboard.jsx";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import AuthForm from "./components/auth/AuthForm.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ThankYouPage from "./pages/thankyou.jsx";
import FormDetails from "./pages/formDetails.jsx";
import CreateBlogForm from "./components/BlogForm/CreateBlogForm.jsx";
import SingleBlog from "./pages/singleBlog.jsx";
import Forums from "./pages/forums.jsx";
import SinglePost from "./pages/singlePost.jsx";
import Posts from "./pages/Posts.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import ForummLayout from "./components/postLayout/Layout.jsx";
import Layout from "./pages/layout.jsx";
import "./App.css";

createRoot(document.getElementById("root")).render(
  
  <StrictMode>
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="mounjaro-compare" element={<MounjaroCompare />} />
                <Route path="wegovy-compare" element={<WegovyCompare />} />
                <Route path="contact-us" element={<Contant />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<AuthForm />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="/:slug" element={<SingleBlog />} />
                <Route
                  path="mounjaro-pannel"
                  element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="form-info"
                  element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                      <FormDetails />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="create-blog"
                  element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                      <CreateBlogForm />
                    </ProtectedRoute>
                  }
                />
              </Route>
              <Route
                element={
                  <ProtectedRoute>
                    <ForummLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:id" element={<PostDetail />} />
              </Route>
            </Routes>
          </Suspense>
        </AuthProvider>
      </Router>
    </Provider>
  </StrictMode>
);
