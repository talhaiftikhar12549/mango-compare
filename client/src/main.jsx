import { StrictMode } from "react";
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./pages/layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Home } from "./pages/home.jsx";
import { store } from "./redux toolkit/store.js";
import { Provider } from "react-redux";
import MounjaroCompare from "./pages/mounjaro-compare.jsx";
// const WegovyCompare = React.lazy(() => import("./pages/wegovy-compare.jsx"));
import WegovyCompare from "./pages/wegovy-compare.jsx";
import Contant from "./pages/contact-us.jsx";
import Blogs from "./pages/blogs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/mounjaro-compare",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MounjaroCompare />
          </Suspense>
        ),
      },
      {
        path: "/wegovy-compare",
        element: (
            <WegovyCompare />
        ),
      },
      {
        path: "/contact-us",
        element: (
            <Contant />
        ),
      },
      {
        path: "/blogs",
        element: (   
            <Blogs />
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
