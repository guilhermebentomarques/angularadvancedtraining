import { createFeatureSelector } from "@ngrx/store";
import { IComment, IPost } from "../interfaces";

export const postsSelector = createFeatureSelector<IPost[]>('posts');
export const commentsSelector = createFeatureSelector<IComment[]>('comments');
