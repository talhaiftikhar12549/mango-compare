import { StrictMode } from "react";
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./pages/layout.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Home } from "./pages/home.jsx";
import { store } from './redux toolkit/store.js'
import { Provider } from 'react-redux'
import MounjaroCompare from "./pages/mounjaro-compare.jsx";
const  WegovyCompare  = React.lazy(() =>
  import("./pages/wegovy-compare.jsx")
);
const  Contant  = React.lazy(() => import("./pages/contact-us.jsx"));
const  Blogs  = React.lazy(() => import("./pages/blogs.jsx"));
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
        path: "mounjaro-compare",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MounjaroCompare />
          </Suspense>
        ),
      },
      {
        path: "wegovy-compare",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <WegovyCompare />
          </Suspense>
        ),
      },
      {
        path: "contact-us",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contant />
          </Suspense>
        ),
      },
      {
        path: "blogs",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Blogs />
          </Suspense>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
 
);
