import Image from "next/image";
import fs from "fs/promises";

export default function Home() {

  const SubmitActions=async (e)=>{
    "use server"
    const {name, add}=Object.fromEntries(e.entries())
    console.log(name)
    console.log(add)
    await fs.writeFile("ganesh.txt", `Name: ${name}\nAddress: ${add}`)
  }
  return (
    <div className="w-full max-w-md mx-auto my-12 p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold text-white mb-6">Server Actions Form</h2>
      <form action={SubmitActions}>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
          <input 
            name="name" 
            id="name" 
            className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
            type="text" 
          />
        </div>
        <div className="mb-6">
          <label htmlFor="add" className="block text-sm font-medium text-slate-300 mb-2">Address</label>
          <input 
            name="add" 
            id="add" 
            className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
            type="text" 
          />
        </div>
        <div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-medium py-2.5 px-4 rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all duration-150">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}