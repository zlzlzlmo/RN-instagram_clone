import { getAuth } from "firebase/auth";
import {
  collection as fbCollection,
  collectionGroup,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import firebaseApp from "../../firebaseConfig";

class FirebaseService {
  constructor(
    readonly db = getFirestore(firebaseApp),
    readonly auth = getAuth(firebaseApp)
  ) {}

  protected async getCollectionGroup(collection: string) {
    const snapshot = await getDocs(collectionGroup(this.db, collection));
    return snapshot.docs.map((doc) => doc.data());
  }

  protected async getCollenctionByOneWhereQuery(
    collection: string,
    { filed, value }: { filed: string; value: string }
  ) {
    const q = query(
      fbCollection(this.db, collection),
      where(filed, "==", value)
    );

    const snapshot = await getDocs(q);
    const result = snapshot.docs.map((doc) => doc.data());
    return result;
  }

  protected async createDoc(collection: string, ...rest: string[]) {
    const collections = rest.join(",");
    const result = await setDoc(doc(this.db, collection, collections), {});
    return result;
  }
}

export default FirebaseService;
