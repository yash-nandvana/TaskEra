import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URl).then(() => {
        console.log('DB connected.'); 
    })
}