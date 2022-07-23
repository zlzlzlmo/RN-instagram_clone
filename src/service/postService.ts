import { Timestamp } from "firebase/firestore";
import FirebaseService from "../lib/firebase";

interface IPostUplaod {
  imageUrl: string;
  user: string;
  profile_picture: string;
  owner_uid: string;
  caption: string;
  createdAt: Timestamp;
  likes: 0;
  likes_by_users: [];
  comments: [];
}

class PostService extends FirebaseService {
  async getPosts() {
    return await this.getCollectionGroup("posts");
  }

  async uploadPost(post: IPostUplaod) {
    if (!this.auth.currentUser?.email) return;
    const result = await this.createDoc(
      "users",
      this.auth.currentUser?.email,
      "posts",
      this.auth.currentUser.email
    );

    return result;
  }
}

export default PostService;
