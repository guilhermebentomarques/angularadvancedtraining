export interface IPost {
  id: string;
  title: string;
  body: string;
}

export interface IComment {
  id: string;
  post_id: string;
  name: string;
  body: string;
  email: string;
}
