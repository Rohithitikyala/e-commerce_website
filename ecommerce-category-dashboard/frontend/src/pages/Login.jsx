import { useState } from "react";
import { api } from "../services/api";
export default function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const login=async()=>{
    const r=await api("/login","POST",{email,password});
    localStorage.setItem("token",r.token);
    window.location="/dashboard";
  };
  return (<>
    <input onChange={e=>setEmail(e.target.value)} placeholder="Email"/>
    <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
    <button onClick={login}>Login</button>
  </>);
}