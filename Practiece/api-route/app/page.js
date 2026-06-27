"use client";

import Image from "next/image";

export default  function Home() {
  const handleClick=async ()=>{
    let data ={
      name:"ganesh",
      role:"engineer"
    }
    let a = await fetch("/api/add",{method:"POST",headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data),})
    let res = await a.json()
    console.log(res)

  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <div>
      <h1 className="text-xl font-bold">Next.js Api route demo</h1>
      <button onClick={handleClick}>click me</button>
     </div>
    </div>
  );
}
