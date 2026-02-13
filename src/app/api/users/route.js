import { NextResponse } from "next/server"


export async function GET() {

    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await res.json()
    return NextResponse.json({
      data
    })
}



export async function POST(request) {

    const {nombre,apellido}=await request.json()
    console.log(nombre,apellido);
    
    return NextResponse.json({
        message:"CREANDO DATOS!"
    })
}



export function PUT() {
    return NextResponse.json({
        message:"ACTUALIZANDO DATOS!"
    })
}

export function DELETE() {
    return NextResponse.json({
        message:"BORRANDO DATO!"
    })
}





