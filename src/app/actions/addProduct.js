"use server";

import dbconnect, { collectionNameObj } from "@/lib/dbConnect";

export const addProduct = async (productData) => {
  const productsCollection = dbconnect(collectionNameObj.productsCollection);

  const result = await productsCollection.insertOne({
    ...productData,
    createdAt: new Date(),
  });

  return {
    acknowledged: result.acknowledged,
    insertedId: result.insertedId.toString(),
  };
};
