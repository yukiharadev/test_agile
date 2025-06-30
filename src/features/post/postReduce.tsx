import { CREATE_POST_FAILURE, CREATE_POST_REQUEST, CREATE_POST_SUCCESS, DELETE_POST_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_TAGS_FAILURE, GET_TAGS_REQUEST, GET_TAGS_SUCCESS, UPDATE_POST_REQUEST, UPDATE_POST_FAILURE, UPDATE_POST_SUCCESS } from "./postType";
import type { PostsResponse } from "../../types/Post/post.response.type";

const initialState = {
    isLoading: false,
    isError: false,
    tags: [],
    posts: null as PostsResponse | null,
    isCreatePost: false,
    isDeletePost: false,
    isUpdatePost: false,
    error: null,
}

const postReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_TAGS_REQUEST:
            return { ...state, isLoading: true };
        case GET_TAGS_SUCCESS:
            return { ...state, isLoading: false, tags: action.payload };
        case GET_TAGS_FAILURE:
            return { ...state, isLoading: false, isError: true, error: action.payload };
        case GET_POSTS_REQUEST:
            return { ...state, isLoading: true };
        case GET_POSTS_SUCCESS:
            return { ...state, isLoading: false, posts: action.payload };
        case GET_POSTS_FAILURE:
            return { ...state, isLoading: false, isError: true, error: action.payload };
        case CREATE_POST_REQUEST:
            return { ...state, isLoading: true };
        case CREATE_POST_SUCCESS:
            return { ...state, isLoading: false, isCreatePost: action.payload };
        case CREATE_POST_FAILURE:
            return { ...state, isLoading: false, isError: true, error: action.payload };
        case DELETE_POST_REQUEST:
            return { ...state, isLoading: true };
        case DELETE_POST_SUCCESS:
            return { ...state, isLoading: false, isDeletePost: true };
        case DELETE_POST_FAILURE:
            return { ...state, isLoading: false, isError: true, error: action.payload };
        case UPDATE_POST_REQUEST:
            return { ...state, isLoading: true };
        case UPDATE_POST_SUCCESS:
            return { ...state, isLoading: false, isUpdatePost: true };
        case UPDATE_POST_FAILURE:
            return { ...state, isLoading: false, isError: true, error: action.payload };
        default:
            return state;
    }
}

export default postReducer;

