import { db } from "./config";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

/**
 * Loads all documents from the posts connection
 * @returns
 * array with the posts
 */

export async function load() {
  // async give us a promise

  try {
    const querySnapshot = await getDocs(collection(db, "posts"));

    return processQuerySnapshot(querySnapshot);
  } catch (error) {
    throw new error("Failed to load the database .");

    // console.warn(error);// how to give it a color to the error message
    // I put this line bellow because it allows to ignore the throw error
    // eslint-disable-next-line
    // throw 'Failed to load the database';// the line above if we want to ignore the throw error otherwise we and the new error check example
  }
}

/**
 * Loads all promoted documents from the collection
 * @returns
 *  Array with posts.
 */
export async function loadPromoted() {
  try {
    const q = query(collection(db, "posts"), where("promote", "==", true));
    const querySnapshot = await getDocs(q);
    return processQuerySnapshot(querySnapshot);
  } catch (error) {
    throw new Error("Failed to load the database");
  }
}

/**
 * Converts a Firebase query snapshot into an array.
 *
 * @param {object} querySnapshot
 * The guery snapshot returned by Firebase.
 * @returns
 * Array with the data.
 */
function processQuerySnapshot(querySnapshot) {
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      // we push to the array the new object that include all object that we have in firebase+ id of the firebase
      ...doc.data(), //all object that were in firebase
      id: doc.id, // all the ideas of object in firebase to create a single object instead of object+id like in firebase
    });
  });

  return data; // this is a promise not a return data!!!!
}

export async function loadById(id) {
  /**
   *
   */

  try {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch {}

  return null;
}

//check bellow the other method for catch block for promise
// export function load(){

//     console.log('Loading...');

//     const data=[];

//    const dbCollection = collection(db,"posts");
//    getDocs(dbCollection)
//    .then((querySnapshot)=>{
//     querySnapshot.forEach((doc)=>{
//         const post={ //we create an object that has the ID plus the element that we have in database
//             ...doc.data(),// a spread opperator
//             id:doc.id
//         };
//         data.push(post)

//     });
//    })
//    .catch((error)=>{
//     console.log('Error: ',error);
//    });
// // const querySnapshot = await getDocs(collection(db, "users"));
// // querySnapshot.forEach((doc) => {
// //   console.log(`${doc.id} => ${doc.data()}`);
// // });

// // return data;
// return new Promise((resolve,reject)=>{
//     resolve('ok')
//});
//}
