import type { RouteObject } from "react-router";
import { AuthProvider } from "../hooks/useAuth";
import MainLayout from "../layouts/full/MainLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/Error/NotFound";
import Profile from "../pages/Profile/Profile";
import SideLayout from "../layouts/full/SideLayout";

const MainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/profile",
    element: <SideLayout />,
    children: [
      {
        path: "/profile",
        element: (
          <AuthProvider>
            <Profile />
          </AuthProvider>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default MainRoutes;
