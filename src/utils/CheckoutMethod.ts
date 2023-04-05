import {
  DocumentData,
  DocumentReference,
  addDoc,
  collection,
  doc,
  runTransaction,
} from "firebase/firestore";
import { db } from "../app/firebase";
import { FormEvent } from "react";
import { CartItemType } from "../Redux/features/cartSlice";
interface Product {
  id: DocumentReference<DocumentData>;
  quantity: number;
}
export const sendOrder = async (
  e: FormEvent<HTMLFormElement>,
  address: string,
  apartment: string,
  city: string,
  state: string,
  phone: string,
  items: CartItemType[]
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
// import amqp from "amqplib";
// import { v4 as uuidv4 } from "uuid";
// import { CartItemType } from "../Redux/features/cartSlice";
// import { FormEvent } from "react";

// interface Order {
//   id: string;
//   address: string;
//   apartment: string;
//   city: string;
//   state: string;
//   phone: string;
//   items: CartItemType[];
// }

// export const sendOrder = async (
//   e: FormEvent<HTMLFormElement>,
//   address: string,
//   apartment: string,
//   city: string,
//   state: string,
//   phone: string,
//   items: CartItemType[]
// ) => {
//   const order: Order = {
//     id: uuidv4(),
//     address,
//     apartment,
//     city,
//     state,
//     phone,
//     items,
//   };
//   const channel = await amqp.connect("amqp://localhost").then((conn: { createChannel: () => any; }) => conn.createChannel());
//   const queueName = "ordersQueue";
//   const message = JSON.stringify(order);

//   channel.assertQueue(queueName, { durable: false });
//   channel.sendToQueue(queueName, Buffer.from(message));
//   console.log(`Order ${order.id} sent to the queue!`);
// };

// const queueName = "ordersQueue";

// const processOrder = async (order: Order) => {
//   const docRefs = order.items.map((item) => doc(db, "products", item.id));
//   await reduceProductQuantity(docRefs);
//   console.log(`Order ${order.id} processed successfully!`);
// };

// const startWorker = async () => {
//   const channel = await amqp.connect("amqp://localhost").then((conn) => conn.createChannel());

//   channel.assertQueue(queueName, { durable: false });
//   console.log(`Worker listening to queue ${queueName}...`);

//   channel.consume(queueName, async (msg) => {
//     if (msg !== null) {
//       const order: Order = JSON.parse(msg.content.toString());
//       await processOrder(order);
//       channel.ack(msg);
//     }
//   });
// };

// startWorker();
