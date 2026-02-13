import { NextResponse } from "next/server";


export async function GET(request,{params}) {

const req=await request
const par=await params
const searchParams= new URL(req.url).searchParams


  const res=  await fetch(`https://jsonplaceholder.typicode.com/users/${par.userId}`)
    const data=await res.json()
    console.log(searchParams,"sdasdas");
    console.log(searchParams.get("nombre"));
    console.log(searchParams.get("apellido"));
    
    
    return NextResponse.json(data)
}