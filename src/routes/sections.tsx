import { useRoutes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { User } from "../pages/User/User";
import MainLayout from "@/layout/MainLayout";

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout><Home /></MainLayout>,
      index: true,
    },
    {
      path: '/user',
      element: <MainLayout><User /></MainLayout>,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ])

  return routes;
}