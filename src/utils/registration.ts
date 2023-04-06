import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../app/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export function signUpWithFb(email: string, password: string) {
  return new Promise((resolve, reject) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const { uid, email, emailVerified, displayName, photoURL } =
          userCredential.user;
        await addDoc(collection(db, "users"), {
          uid,
          email,
          emailVerified,
          displayName,
          photoURL,
        }).then(() =>
          resolve({ uid, email, emailVerified, displayName, photoURL })
        );
      })
      .catch((error) => {
        reject(error);
      })
  );
}

export async function getUser(uid: string) {
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const snap = await getDocs(q);
  return !snap.empty;
}
