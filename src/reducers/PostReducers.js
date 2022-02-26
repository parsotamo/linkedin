import { CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAIL, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAIL } from "../actions/constants"

export const createPostReducer = (state = '', action) =>{
    switch (action.type){
        case CREATE_POST_REQUEST:
            return { loading: true };
        case CREATE_POST_SUCCESS:
            return { loading: false, success: true };
        case CREATE_POST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
} 

export const getPostsReducer = (state = {posts: []}, action) =>{
    switch (action.type){
        case GET_POSTS_REQUEST:
            return { loading: true };
        case GET_POSTS_SUCCESS:
            return { loading: false, posts: [...action.payload], success: true };
        case GET_POSTS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
} 