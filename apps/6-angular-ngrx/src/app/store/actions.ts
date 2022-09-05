import { createAction, props } from "@ngrx/store";
import { IComment, IPost } from "../interfaces";

export const ADD_POST = createAction('[Posts] Add', props<{ post: IPost }>());
export const DELETE_POST = createAction('[Posts] Delete', props<{ id: string }>());
export const DELETE_POST_SUCCESS = createAction('[Posts] Delete Success', props<{ id: string }>());
export const LOAD_POSTS = createAction('[Posts] Load');
export const LOAD_POSTS_SUCCESS = createAction('[Posts] Load Success', props<{ posts: IPost[] }>());

export const ADD_COMMENT = createAction('[Comments] Add', props<{ comment: IComment }>());
