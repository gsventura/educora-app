import { Pinecone } from "@pinecone-database/pinecone"

const apiKey = process.env.PINECONE_API_KEY

if (!apiKey) {
    throw Error("API PINECONE not found")
}

const pinecone = new Pinecone ({
    apiKey,  
});

export const questionsIndex = pinecone.Index("educoraapp");