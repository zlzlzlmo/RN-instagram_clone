import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { Alert } from "react-native";
import firebaseApp from "../../../firebaseConfig";
import { LoginInfoType } from "../../features/authentication/login/ts/type";
import { SignUpInfoType } from "../../features/authentication/signup/ts/type";

class FirebaseAuthentication {
  constructor(
    private readonly auth = getAuth(firebaseApp),
    private readonly db = getFirestore(firebaseApp)
  ) {}

  async login(info: LoginInfoType) {
    try {
      await signInWithEmailAndPassword(this.auth, info.email, info.password);
    } catch (error: any) {
      Alert.alert("Not Allowed", error.message);
    }
  }

  async signUp(info: SignUpInfoType) {
    try {
      const authUser = await createUserWithEmailAndPassword(
        this.auth,
        info.email,
        info.password
      );

      if (!authUser.user.email) return;

      await setDoc(doc(this.db, "users", authUser.user.email), {
        email: authUser.user.email,
        owner_uid: authUser.user.uid,
        userName: info.userName,
        profile_picture: await this.getRandomProfilePicture(),
      });
    } catch (error: any) {
      Alert.alert("Failed", error.message);
    }
  }

  private getRandomProfilePicture = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].picture.large;
  };
}

export default FirebaseAuthentication;
