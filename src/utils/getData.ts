import { db } from "../app/firebase";
import {
  collection,
  query,
  getDocs,
  DocumentData,
  doc,
  getDoc,
} from "firebase/firestore";
type dataType = {
  data: DocumentData;
  id: string;
};
export const getToysData = async () => {
  const q = query(collection(db, "toys"));
  const data: dataType[] = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push({ data: doc.data(), id: doc.id });
  });
  return data;
};
export const getFoodData = async () => {
  const q = query(collection(db, "food"));
  const data: dataType[] = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push({ data: doc.data(), id: doc.id });
  });
  return data;
};
export const getSingleDocument = async (
  collectionName: string,
  documentId: string
) => {
  const docRef = doc(db, collectionName, documentId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
};
