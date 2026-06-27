"use server"
import fs from "fs/promises";
export const SubmitActions=async (e)=>{
    const {name, add}=Object.fromEntries(e.entries())
    console.log(name)
    console.log(add)
    await fs.writeFile("ganesh.txt", `Name: ${name}\nAddress: ${add}`)
  }