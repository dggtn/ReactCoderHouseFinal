import { collection, doc, getDoc, getDocs, getFirestore, where, query } from 'firebase/firestore'

const COLLECTION_NAME = 'items'

export const getAll = () => {
    const db = getFirestore();
    const promise = new Promise((resolve, reject) => {
        const items = collection(db, COLLECTION_NAME);
        getDocs(items).then((snapshot) => {
            const result = snapshot.size === 0 ? [] : snapshot.docs.map( (document) => {
                return {id: document.id, ...document.data()}
            })
            resolve(result);
        })
    });
    return promise;
}

export const getById = (itemId) => {
    const db = getFirestore();
    const promise = new Promise((resolve, reject) => {
        const itemReference = doc(db, COLLECTION_NAME, itemId);
        getDoc(itemReference).then((snapshot) => {
            if (snapshot.exists()) {
                resolve( {id: snapshot.id, ...snapshot.data()});
            } else {
                reject({message: 'Elemento no encontrado'});
            }
        });
    });

    return promise;
}

export const getByCategory = (categoryId) => {
    const db = getFirestore()
    const byCategory = query(collection(db, COLLECTION_NAME), where("categoryId", "==", categoryId));
    const promise = new Promise((resolve, reject) => {
        getDocs(byCategory).then((snapshot) => {
            const result = snapshot.size === 0 ? [] : snapshot.docs.map( (document) => {
                return {id: document.id, ...document.data()}
            });
            resolve(result);
        });
    });
    return promise;
}