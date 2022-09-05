import { createReducer, on } from '@ngrx/store';
import { IComment, IPost } from '../interfaces';
import {
  ADD_COMMENT,
  ADD_POST,
  DELETE_POST_SUCCESS,
  LOAD_POSTS_SUCCESS,
} from './actions';

const postsInitialState: IPost[] = [];

const postsReducer = createReducer(
  postsInitialState,
  on(ADD_POST, (state, { post }) => [...state, post]),
  on(LOAD_POSTS_SUCCESS, (state, { posts }) => posts),
  on(DELETE_POST_SUCCESS, (state, { id }) => {
    const newState = [...state];
    newState.splice(
      state.findIndex((post) => post.id === id),
      1
    );
    return newState;
  })
);

const commentsInitialState: IComment[] = [];

const commentsReducer = createReducer(
  commentsInitialState,
  on(ADD_COMMENT, (state, { comment }) => [...state, comment])
);

export const reducers = {
  posts: postsReducer,
  comments: commentsReducer,
};
