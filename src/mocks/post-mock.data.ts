import { IPost } from "../ts/interface/post.interface";
import { USERS } from "./user-mock-data";

export const POSTS: IPost[] = [
  {
    imageUrl:
      "https://velog.velcdn.com/images/hoon_dev/post/bbac3b86-a56d-4b1d-a741-ee7599341e4b/image.png",
    user: USERS[0].user,
    likes: 6700,
    caption: "Korea technology blog",
    profile_picture: USERS[0].image,
    comments: [
      { user: "sujin", comment: "Great! Keep doing this react-native" },
      { user: "henry", comment: "nice react-native" },
    ],
  },
  {
    imageUrl:
      "https://velog.velcdn.com/images/hoon_dev/post/bbac3b86-a56d-4b1d-a741-ee7599341e4b/image.png",
    user: USERS[0].user,
    likes: 6700,
    caption: "Korea technology blog",
    profile_picture: USERS[0].image,
    comments: [
      { user: "sujin", comment: "Great! Keep doing this react-native" },
      { user: "henry", comment: "nice react-native" },
    ],
  },
];
