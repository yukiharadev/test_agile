import type { Dispatch } from "react";
import {
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_TAGS_FAILURE,
  GET_TAGS_REQUEST,
  GET_TAGS_SUCCESS,
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  type PostActionTypes,
  type TagActionTypes,
} from "./postType";
import {
  CREATE_POST_URL,
  DELETE_POST_URL,
  GET_POSTS_URL,
  GET_TAGS_URL,
  UPDATE_POST_URL,
} from "../../configs/api.url";
import apiClient from "../../services/api.client";
import type { PostsResponse } from "../../types/Post/post.response.type";
import type {
  CreatePostRequest,
  UpdatePostRequest,
} from "../../types/Post/post.request.type";

const getTagsRequest = (): TagActionTypes => {
  return {
    type: GET_TAGS_REQUEST,
  };
};

const getTagsSuccess = (tags: string[]): TagActionTypes => {
  return {
    type: GET_TAGS_SUCCESS,
    payload: tags,
  };
};

const getTagsFailure = (error: string): TagActionTypes => {
  return {
    type: GET_TAGS_FAILURE,
    payload: error,
  };
};

const getPostsRequest = (): PostActionTypes => {
  return {
    type: GET_POSTS_REQUEST,
  };
};

const getPostsSuccess = (posts: PostsResponse): PostActionTypes => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
  };
};

const getPostsFailure = (error: string): PostActionTypes => {
  return {
    type: GET_POSTS_FAILURE,
    payload: error,
  };
};

const createPostRequest = (): PostActionTypes => {
  return {
    type: CREATE_POST_REQUEST,
  };
};

const createPostSuccess = (post: boolean): PostActionTypes => {
  return {
    type: CREATE_POST_SUCCESS,
    payload: post,
  };
};

const createPostFailure = (error: string): PostActionTypes => {
  return {
    type: CREATE_POST_FAILURE,
    payload: error,
  };
};

const updatePostRequest = (): PostActionTypes => {
  return {
    type: UPDATE_POST_REQUEST,
  };
};

const updatePostFailure = (error: string): PostActionTypes => {
  return {
    type: UPDATE_POST_FAILURE,
    payload: error,
  };
};

const updatePostSuccess = (post: boolean): PostActionTypes => {
  return {
    type: UPDATE_POST_SUCCESS,
    payload: post,
  };
};

const deletePostRequest = (): PostActionTypes => {
  return {
    type: DELETE_POST_REQUEST,
  };
};

const deletePostSuccess = (post: boolean): PostActionTypes => {
  return {
    type: DELETE_POST_SUCCESS,
    payload: post,
  };
};

const deletePostFailure = (error: string): PostActionTypes => {
  return {
    type: DELETE_POST_FAILURE,
    payload: error,
  };
};
const getTags = () => {
  return async (dispatch: Dispatch<TagActionTypes>) => {
    dispatch(getTagsRequest());
    try {
      const response = await apiClient.get(GET_TAGS_URL);
      if (response.status === 200) {
        dispatch(getTagsSuccess(response.data));
      } else {
        dispatch(getTagsFailure(response.data.message));
      }
    } catch (error) {
      dispatch(getTagsFailure(error as string));
    }
  };
};

const getPosts = (page: number) => {
  return async (dispatch: Dispatch<PostActionTypes>) => {
    dispatch(getPostsRequest());
    try {
      const response = await apiClient.get(GET_POSTS_URL, {
        params: {
          page: page,
        },
      });
      if (response.status === 200) {
        dispatch(getPostsSuccess(response.data));
      } else {
        dispatch(getPostsFailure(response.data.message));
      }
    } catch (error) {
      dispatch(getPostsFailure(error as string));
    }
  };
};

const createPost = (post: CreatePostRequest) => {
  return async (dispatch: Dispatch<PostActionTypes>) => {
    dispatch(createPostRequest());
    try {
      const response = await apiClient.post(CREATE_POST_URL, post);
      if (response.status === 201) {
        dispatch(createPostSuccess(true));
      } else {
        dispatch(createPostFailure(response.data.message));
      }
    } catch (error) {
      dispatch(createPostFailure(error as string));
    }
  };
};

const deletePost = (id: string) => {
  return async (dispatch: Dispatch<PostActionTypes>) => {
    dispatch(deletePostRequest());
    try {
      const response = await apiClient.delete(DELETE_POST_URL(id));
      if (response.status === 200) {
        dispatch(deletePostSuccess(true));
      } else {
        dispatch(deletePostFailure(response.data.message));
      }
    } catch (error) {
      dispatch(deletePostFailure(error as string));
    }
  };
};

const updatePost = (post: UpdatePostRequest) => {
  return async (dispatch: Dispatch<PostActionTypes>) => {
    dispatch(updatePostRequest());
    try {
      const response = await apiClient.patch(UPDATE_POST_URL(post.id), post);
      if (response.status === 200) {
        dispatch(updatePostSuccess(true));
      } else {
        dispatch(updatePostFailure(response.data.message));
      }
    } catch (error) {
      dispatch(updatePostFailure(error as string));
    }
  };
};

export {
  getTags,
  getTagsRequest,
  getTagsSuccess,
  getTagsFailure,
  getPostsRequest,
  getPostsSuccess,
  getPostsFailure,
  getPosts,
  createPost,
  deletePost,
  updatePostRequest,
  updatePostSuccess,
  updatePostFailure,
  updatePost,
};
