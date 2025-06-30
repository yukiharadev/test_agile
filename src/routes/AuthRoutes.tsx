import type { RouteObject } from "react-router";
import Login from "../pages/Auth/Login";
import AuthLayout from "../layouts/auth/AuthLayout";

const AuthRoutes: RouteObject[] = [
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            }
        ]
    }
]

export default AuthRoutes;
