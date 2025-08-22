import dbconnect, { collectionNameObj } from "@/lib/dbConnect";


export async function POST(req) {
  try {
    const body = await req.json();

    const productsCollection = dbconnect(collectionNameObj.productsCollection);

    const result = await productsCollection.insertOne({
      ...body,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({
        acknowledged: result.acknowledged,
        insertedId: result.insertedId.toString(),
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Product insert error:", error);
    return new Response(JSON.stringify({ error: "Failed to add product" }), {
      status: 500,
    });
  }
}