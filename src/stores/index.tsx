import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authReduce";
import postReducer from "../features/post/postReduce";


const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
    },
});


export default store;