"use server";

import dbconnect, { collectionNameObj } from "@/lib/dbConnect";

export const getProducts = async () => {
  const productsCollection = dbconnect(collectionNameObj.productsCollection);

  const products = await productsCollection.find({}).toArray();

  
  return products.map((p) => ({
    ...p,
    _id: p._id.toString(),
    
  }));
};
