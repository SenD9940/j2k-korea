import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const useFirebaseConfig = () => {
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        databaseURL: process.env.REACT_APP_DATABASE_URL,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
        measurementId: process.env.REACT_APP_MEASUREMENT_ID
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const dbFirestore = getFirestore(app);
    const dbRealtime = getDatabase(app);
    const auth = getAuth(app);
    const storage = getStorage(app);
    return {firebaseConfig, analytics, dbFirestore, dbRealtime, auth, storage};
}

export default useFirebaseConfig;