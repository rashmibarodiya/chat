import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST (req :NextRequest,res:NextResponse){

    console.log("i am here be positive ..............................")
    const {userId, email ,profilePic} = await req.json()


    try{
        let user = await prisma.user.findUnique({
            where : {
                id : userId
            }
        })
    
    
        if(user){
            console.log("user found ",user)
            NextResponse.json({message:"user found successfully",user},{status:200})
    
        }
        else{
            user = await prisma.user.create({
                data:{
                    email:email,
                    profilePic:profilePic || null
                }
            })
    
            console.log("user created successfully ",user)
            NextResponse.json({message:"user created successfully",user},{status:200})
        }
    }catch(e){
        console.log("something went wrong during signin$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ",e)
        NextResponse.json({message:"something went wrong during signin ",e},{status:500})
    }
}