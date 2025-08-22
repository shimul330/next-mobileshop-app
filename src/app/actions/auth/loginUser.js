"use server";

import dbconnect, { collectionNameObj } from "@/lib/dbConnect";

export const loginUser = async (payload) => {
    const {email, password} = payload;
    const userCollection = dbconnect(collectionNameObj.usercollection);
    const user = userCollection.findOne({email});
    if(!user) return null;

    return user;
}