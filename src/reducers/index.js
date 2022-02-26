import { combineReducers } from "redux"
import { userLoginReducer } from './UserReducers';
import { createPostReducer, getPostsReducer } from "./PostReducers";

export default combineReducers({
    user: userLoginReducer,
    createPost: createPostReducer,
    posts: getPostsReducer
});