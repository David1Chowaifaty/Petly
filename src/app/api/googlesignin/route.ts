import { auth, db } from "@/app/firebase";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
export async function POST(req: Request) {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const user = result.user;
      const { uid, email, emailVerified, displayName, photoURL } = user;
      await addDoc(collection(db, "users"), {
        uid,
        email,
        emailVerified,
        displayName,
        photoURL,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
