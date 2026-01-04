import { useEffect,useState } from "react";
import { api } from "../services/api";
import CategoryCard from "../components/CategoryCard";
export default function Dashboard(){
  const [c,setC]=useState([]);
  useEffect(()=>{api("/categories","GET").then(setC)},[]);
  return <div>{c.map(x=><CategoryCard key={x.id} cat={x}/>)}</div>;
}