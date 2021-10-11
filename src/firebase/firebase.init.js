import { initializeApp } from "firebase";
import firebaseConfig from "./firebase.config";


const initializingApp = () => initializeApp(firebaseConfig);

export default initializingApp;