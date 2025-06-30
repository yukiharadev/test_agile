import { createBrowserRouter } from "react-router";
import AuthRoutes from "./AuthRoutes";
import MainRoutes from "./MainRoutes";

const router = createBrowserRouter(
    [
        ...AuthRoutes,
        ...MainRoutes,
    ],
    {
        basename: import.meta.env.VITE_BASE_URL,
    }
);

export default router;
