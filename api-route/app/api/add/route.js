import { NextResponse } from "next/server";

export async function POST(request){
    let data = await request.json();
    console.log("the data is",data)
    return NextResponse.json({success:true,data})
}