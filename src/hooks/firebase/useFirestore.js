import {
  query,
  collection,
  getDocs,
  where,
  limit,
  orderBy,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import useFirebaseConfig from "./useFirebaseConfig";

const useFirestore = () => {
  const { dbFirestore } = useFirebaseConfig();

  const readFirestore = async (table) => {
    const firestore_query = query(
      collection(dbFirestore, table),
    );
    return await getDocs(firestore_query)
      .then((querySnapshot) => {
        return querySnapshot;
      })
      .catch((err) => {
        return err;
      });
  };

  const readFirestoreOneDoc = async(table, id) => {
    const docRef = doc(dbFirestore, table, id);
    return await getDoc(docRef);
}


  const readFirestoreWithQuery = async (table, sql) => {
    const firestore_query = query(
      collection(dbFirestore, table),
      where(sql.field, sql.operator, sql.data)
    );
    return await getDocs(firestore_query)
      .then((querySnapshot) => {
        return querySnapshot;
      })
      .catch((err) => {
        return err;
      });
  };

  const readFirestoreWithSort= async (
    table,
    sort
  ) => {
    const firestore_query = query(
      collection(dbFirestore, table),
      orderBy(sort.name, sort.direction),
    );
    return await getDocs(firestore_query)
      .then((querySnapshot) => {
        return querySnapshot;
      })
      .catch((err) => {
        return err;
      });
  };

  const readFirestoreWithSortWithLimit = async (
    table,
    sort,
    max_items
  ) => {
    const firestore_query = query(
      collection(dbFirestore, table),
      orderBy(sort.name, sort.direction),
      limit(max_items)
    );
    return await getDocs(firestore_query)
      .then((querySnapshot) => {
        return querySnapshot;
      })
      .catch((err) => {
        return err;
      });
  };

  const writeFirestore = async (table, id, data) =>{
    return await setDoc(doc(dbFirestore, table, id), data).then(res => {
        return true;
    }).catch(err => {
        return false;
    })
}

  const addFireStore = async (table, data) => {
    try {
      console.log("data", data);
      console.log("table", table);
      const docRef = await addDoc(collection(dbFirestore, table), data);
      console.log("docRef", docRef);
      return docRef.id;
    } catch (error) {
      throw error;
    }
  };


  const deleteFirestore = async (table, docId) => {
    try {
      await deleteDoc(doc(dbFirestore, table, docId));
    } catch (error) {
      throw error;
    }
  };

  const updateFirestore = async (table, docId, data) => {
    try {
      await updateDoc(doc(dbFirestore, table, docId), data);
      return true;
    } catch (error) {
      throw error;
    }
  };


  return {
    readFirestore,
    readFirestoreOneDoc,
    readFirestoreWithQuery,
    readFirestoreWithSort,
    readFirestoreWithSortWithLimit,
    writeFirestore,
    addFireStore,
    deleteFirestore,
    updateFirestore,
  };
};

export default useFirestore;
