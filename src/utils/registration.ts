import {
  DocumentData,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../app/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { rejects } from "assert";

export function signUpWithFb(email: string, password: string, name: string) {
  return new Promise((resolve, reject) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(userCredential.user, {
          displayName: name,
        });
        const { uid, email, emailVerified, photoURL } = userCredential.user;
        await addDoc(collection(db, "users"), {
          uid,
          email,
          emailVerified,
          name,
          photoURL,
        }).then(() => resolve({ uid, email, emailVerified, name, photoURL }));
      })
      .catch((error) => {
        reject(error);
      })
  );
}
export type UserType = {
  id: string;
  data: {
    email: string;
    id: string;
    photoURL: string;
    name: string;
  };
};
export async function getUser(uid: string) {
  return new Promise<UserType | null>(async (resolve, rejects) => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", uid));
      const snap = await getDocs(q);
      if (snap.empty) {
        resolve(null);
      }
      resolve({
        id: snap.docs[0].id,
        data: {
          email: snap.docs[0].data().email,
          name: snap.docs[0].data().name,
          id: snap.docs[0].data().uid,
          photoURL: snap.docs[0].data().photoURL,
        },
      });
    } catch (err) {
      rejects(err);
    }
  });
}
