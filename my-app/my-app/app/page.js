// import { useState,useEffect } from "react";

import fs from "fs/promises"

export default async function Home() {
  // const [count,setCount] = useState(0)
  console.log("hey this is ganeh");
  let a = await fs.readFile("data.json")
   return (
    <div>
      <p>I am a Server Component</p>
      {/* 3. Render the actual string text data cleanly */}
      <div>{a.toString()}</div>
    </div>
  );
};
