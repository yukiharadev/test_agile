const BASE_URL = "https://api-test-web.agiletech.vn";

//AUTH
const LOGIN_URL ="/auth/login";
const REFRESH_TOKEN_URL ="/auth/refresh-token";
const LOGOUT_URL ="/auth/logout";


//POSTS
const GET_TAGS_URL ="/posts/tags";
const GET_POSTS_URL ="/posts";
const CREATE_POST_URL ="/posts";
const UPDATE_POST_URL = (id: string) => `/posts/${id}`;
const DELETE_POST_URL = (id: string) => `/posts/${id}`;

//GALLERY
const GET_GALLERY_URL ="/galleries";

export {BASE_URL, LOGIN_URL, REFRESH_TOKEN_URL, LOGOUT_URL, GET_TAGS_URL, GET_POSTS_URL, CREATE_POST_URL, UPDATE_POST_URL, DELETE_POST_URL, GET_GALLERY_URL};