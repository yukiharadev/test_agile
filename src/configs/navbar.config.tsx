const navbarConfig = [
    {
        name : "Profile",
        path : "/profile",
        isLogin : true,
        isHomePage: true,
    },
    {
        name : "Log Out",
        path : null,
        isLogin : true,
        isHomePage: true,
    },
    {
        name: "Sign In",
        path : "/auth/login",
        isLogin : false,
        isHomePage: true,
    },
]

export default navbarConfig;