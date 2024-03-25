import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore"

const COLLECTION_NAME = 'orders'

export const createOrder = (order) => {
    const newOrder = {
        buyer: {
            name: order.buyer.name,
            phone: order.buyer.phone,
            email: order.buyer.email,
        },
        items: order.items,
        total: order.total,
        date: serverTimestamp()
    }

    const db = getFirestore();
    const ordersCollection = collection(db, COLLECTION_NAME);

    const promise = new Promise( (resolve, reject) => {
        addDoc(ordersCollection, newOrder).then( ({id}) => {
            resolve(id);
        });
    });
    return promise;
}