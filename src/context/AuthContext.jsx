import axios from "axios";
import React,{createContext, useState} from "react";

export const AuthContext=createContext();

export const AuthProvider =({children})=>{
    const [token, setToken]=useState(null);

    const handleLogin=(body)=>{
        axios({
            method:"POST",
            url:"https://reqres.in/api/login",
            data:body
        })
        .then(res=>{console.log(res)});
    }

    const value={
        handleLogin,
        token
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};