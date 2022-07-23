import FirebaseService from "../lib/firebase";

class CurrentUserService extends FirebaseService {
  async getCurrentUser() {
    if (!this.auth.currentUser?.uid) return;
    const result = await this.getCollenctionByOneWhereQuery("users", {
      filed: "owner_uid",
      value: this.auth.currentUser?.uid,
    });
    return result[0];
  }
}

export default CurrentUserService;
