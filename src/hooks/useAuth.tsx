import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        setIsAuthenticated(!!token);
        setIsLoading(false); 
    }, []);

    return {
        isAuthenticated,
        isLoading,
    };
};



const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation();


    if (isLoading) {
        return <div>Loading...</div>; 
    }

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export { useAuth, AuthProvider };

