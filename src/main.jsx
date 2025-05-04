import { StrictMode } from "react";
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./pages/layout.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { Home } from "./pages/home.jsx";
import { store } from "./redux toolkit/store.js";
import { Provider } from "react-redux";
import MounjaroCompare from "./pages/mounjaro-compare.jsx";
import WegovyCompare from "./pages/wegovy-compare.jsx";
import Contant from "./pages/contact-us.jsx";
import Blogs from "./pages/blogs.jsx";
import AdminDashboard from "./pages/adminDashboard.jsx";
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
import AuthForm from "./components/auth/AuthForm.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AdminDashWegovy from "./pages/adminDashWegovy.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "/mounjaro-compare",
//         element: (
//           <Suspense fallback={<div>Loading...</div>}>
//             <MounjaroCompare />
//           </Suspense>
//         ),
//       },
//       {
//         path: "/wegovy-compare",
//         element: <WegovyCompare />,
//       },
//       {
//         path: "/contact-us",
//         element: <Contant />,
//       },
//       {
//         path: "/blogs",
//         element: <Blogs />,
//       },
//       {
//         path: "/login",
//         element: <AuthForm />,
//       },
//       // {
//       //   path: "/register-secret",
//       //   element: <Register />,
//       // },
//       {
//         path: "/dashboard",
//         element: (
//           <ProtectedRoute>
//             <AdminDashboard />
//           </ProtectedRoute>
//         ),
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="mounjaro-compare"
                element={
                 
                    <MounjaroCompare />
                  
                }
              />
              <Route path="wegovy-compare" element={<WegovyCompare />} />
              <Route path="contact-us" element={<Contant />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<AuthForm />} />
              {/* <Route path="register-secret" element={<Register />} /> */}
              <Route
                path="mounjaro-pannel"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="wegovy-pannel"
                element={
                  <ProtectedRoute>
                    <AdminDashWegovy />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
          </Suspense>
        </AuthProvider>
      </Router>
      {/* <RouterProvider router={router} /> */}
    </Provider>
  </StrictMode>
);