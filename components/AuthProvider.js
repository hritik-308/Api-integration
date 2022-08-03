import React, { Children, createContext } from 'react';
import auth from '@react-native-firebase/auth';


export const AuthContext = createContext();

export const AuthProvider = ({Children}) =>{
    return(
        <AuthContext.Provider>
         {Children}   
        </AuthContext.Provider>
    )
}