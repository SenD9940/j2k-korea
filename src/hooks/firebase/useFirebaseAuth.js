import { useNavigate } from "react-router-dom";
import useFirebaseConfig from "./useFirebaseConfig";
import { createUserWithEmailAndPassword, signInAnonymously, signInWithEmailAndPassword, signOut} from "firebase/auth";

const useFirebaseAuth = () => {
    const navigate = useNavigate();
    const {auth} = useFirebaseConfig();

    const anymousLogin = async() => {
      const result = await signInAnonymously(auth)
      .then(() => {
        return true
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        return false;
        // ...
      });
      return result;
    }

    const createAccount = async(email, password) => {
      const result = await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return user;
        // ...
      })
      .catch((err) => {
        console.log(err);
        return null;
        // ..
      });
      return result;
  }

    const login = async (email, password) => {
        const result = await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
          const user = userCredential.user;
          return user;
        })
        .catch((error) => {
          return error;
        });
        return result;
      }

    const logout = async () => {
        const result =  await signOut(auth).then(() => {
          navigate("/", {replace:true});  
          return true
        }).catch((error) => {
          return error;
        });
        return result;
      }

    return {createAccount, login, logout, anymousLogin}
}

export default useFirebaseAuth;