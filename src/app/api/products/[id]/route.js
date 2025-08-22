import dbconnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req,{params}) =>{
    const p = await params;
    const productsCollection = dbconnect(collectionNameObj.productsCollection);
    const data = await productsCollection.findOne({_id: new ObjectId(p.id)})

    return NextResponse.json(data);
}