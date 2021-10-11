import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";


export const AuthContext = createContext();

const authContextProvider = ({ children }) => {
    const allContext = useFirebase();

    return (
        <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
    )
}

export default authContextProvider;