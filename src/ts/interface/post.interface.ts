export interface IPost {
  imageUrl: string;
  user: string;
  likes: number;
  caption: string;
  profile_picture: string;
  comments: {
    user: string;
    comment: string;
  }[];
}
