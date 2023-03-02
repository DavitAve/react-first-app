import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import News from "./pages/News";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import CurrentNews from "./pages/CurrentNews";

const RootProv = () => {
  const routes = createBrowserRouter([
    {
      element: <Layout/>,
      children: [
        {
          element: <Home/>,
          path: "/",
        },
        {
          element: <News/>,
          path: "/news",
        },
        {
          element: <CurrentNews/>,
          path: "/news/:id",
        },
      ]
    },
    {
      element: <UserPage/>,
      path: "/user"
    }
  ]);
  return <RouterProvider router={routes} />;
};

export default RootProv;
