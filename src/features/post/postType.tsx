import type { PostsResponse } from "../../types/Post/post.response.type";

export const GET_TAGS_REQUEST = "GET_TAGS_REQUEST";
export const GET_TAGS_SUCCESS = "GET_TAGS_SUCCESS";
export const GET_TAGS_FAILURE = "GET_TAGS_FAILURE";

export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";


export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

interface GetPostsRequestAction {
    type: typeof GET_POSTS_REQUEST;
}

interface GetPostsSuccessAction {
    type: typeof GET_POSTS_SUCCESS;
    payload: PostsResponse;
}

interface GetPostsFailureAction {
    type: typeof GET_POSTS_FAILURE;
    payload: string;
}

interface CreatePostRequestAction {
    type: typeof CREATE_POST_REQUEST;
}

interface CreatePostSuccessAction {
    type: typeof CREATE_POST_SUCCESS;
    payload: boolean;
}

interface CreatePostFailureAction {
    type: typeof CREATE_POST_FAILURE;
    payload: string;
}

interface UpdatePostRequestAction {
    type: typeof UPDATE_POST_REQUEST;
}

interface UpdatePostSuccessAction {
    type: typeof UPDATE_POST_SUCCESS;
    payload: [];
}

interface UpdatePostFailureAction {
    type: typeof UPDATE_POST_FAILURE;
    payload: string;
}

interface DeletePostRequestAction {
    type: typeof DELETE_POST_REQUEST;
}

interface DeletePostSuccessAction {
    type: typeof DELETE_POST_SUCCESS;
    payload: [];
}

interface DeletePostFailureAction {
    type: typeof DELETE_POST_FAILURE;
    payload: string;
}

interface GetTagsRequestAction {
  type: typeof GET_TAGS_REQUEST;
}

interface GetTagsSuccessAction {
  type: typeof GET_TAGS_SUCCESS;
  payload: string[];
}

interface GetTagsFailureAction {
  type: typeof GET_TAGS_FAILURE;
  payload: string;
}

export type TagActionTypes =
  | GetTagsRequestAction
  | GetTagsSuccessAction
  | GetTagsFailureAction;

export type PostActionTypes =
  | GetPostsRequestAction
  | GetPostsSuccessAction
  | GetPostsFailureAction
  | CreatePostRequestAction
  | CreatePostSuccessAction
  | CreatePostFailureAction
  | UpdatePostRequestAction
  | UpdatePostSuccessAction
  | UpdatePostFailureAction
  | DeletePostRequestAction
  | DeletePostSuccessAction
  | DeletePostFailureAction;





