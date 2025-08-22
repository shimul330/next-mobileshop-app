"use server";

import dbconnect, { collectionNameObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const usercollection = dbconnect(collectionNameObj.usercollection);

  const user = await usercollection.findOne({ email: payload.email });

  if (!user) {
    const result = await usercollection.insertOne(payload);

    // Convert ObjectId to string before returning
    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(),
    };
  }

  return null;
};
