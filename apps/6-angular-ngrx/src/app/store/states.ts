import { IComment, IPost } from "../interfaces";

export interface ApplicationState {
  posts: IPost[];
  comments: IComment[];
}
