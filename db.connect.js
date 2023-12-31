import mongoose from "mongoose";
const dbName=process.env.DB_NAME;
const dbPass=encodeURIComponent(process.env.DB_PASSWORD)
const dbUserName=process.env.DB_USERNAME;


export const connectDb=async()=>{
    try {
        await mongoose.connect(
            `mongodb+srv://${dbUserName}:${dbPass}@cluster0.x0scyo8.mongodb.net/${dbName}?retryWrites=true&w=majority`
        );

        console.log("DB connection established...")
        
    } catch (error) {
        console.log("DB connection failed...");
        console.log(error.message);
    }
}



//git init
//git status=>kk xa herxa add na vako
//git add .
//git status
//git commit -m "any message k kam gareko"