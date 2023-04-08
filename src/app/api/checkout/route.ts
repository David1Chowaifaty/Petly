import {
  DocumentData,
  DocumentReference,
  addDoc,
  collection,
  doc,
  runTransaction,
} from "firebase/firestore";
import { db } from "@/app/firebase";
import { User } from "next-auth";
import { CartItemType } from "@/Redux/features/cartSlice";
export async function POST(req: Request) {
  const { address, apartment, city, state, phone, items, user } =
    await req.json();
  try {
    sendOrder(address, apartment, city, state, phone, items, user);
    return new Response(JSON.stringify({ message: "ok" }));
  } catch (err) {
    return new Response(JSON.stringify({ message: err }));
  }
}
interface Product {
  id: DocumentReference<DocumentData>;
  quantity: number;
}
export const sendOrder = async (
  address: string,
  apartment: string,
  city: string,
  state: string,
  phone: string,
  items: CartItemType[],
  user:
    | (User & {
        id: string;
      })
    | undefined
) => {
  let newItems: CartItemType[] = [];
  let ids: Product[] = [];

  items.forEach((item) => {
    const {
      amount,
      description,
      id,
      images,
      name,
      price,
      quantity,
      newAmount,
      category,
    } = item;
    let a = amount;
    if (newAmount !== undefined) {
      a = newAmount;
    }
    newItems.push({
      description,
      id,
      images,
      name,
      price,
      quantity,
      amount: a,
    });
    ids.push({
      id: doc(db, category!, id),
      quantity: a,
    });
  });
  await addDoc(collection(db, "orders"), {
    address,
    apartment,
    city,
    state,
    phone,
    newItems,
    user,
  });
  await reduceProductQuantity(ids);
};

const reduceProductQuantity = async (docRefs: Product[]) => {
  try {
    await Promise.all(
      docRefs.map(async (docRef) => {
        await runTransaction(db, async (transaction) => {
          const sfDoc = await transaction.get(docRef.id);
          if (!sfDoc.exists()) {
            throw new Error("Document does not exist!");
          }
          const newQuantity =
            (sfDoc.data() as Product).quantity - docRef.quantity;
          transaction.update(docRef.id, { quantity: newQuantity });
        });
      })
    );
  } catch (error) {
    console.error("Transaction failed: ", error);
  }
};
