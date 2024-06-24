import { useRoutes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { User } from "../pages/User/User";

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
      index: true,
    },
    {
      path: '/user',
      element: <User />,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ])

  return routes;
}