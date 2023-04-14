import { db } from "@/app/firebase";
import { query, collection, getDocs, DocumentData } from "firebase/firestore";

export async function GET() {
  try {
    console.log("hello");
    const q = query(collection(db, "toys"));
    const data: dataType[] = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ data: doc.data(), id: doc.id });
    });
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }
}
