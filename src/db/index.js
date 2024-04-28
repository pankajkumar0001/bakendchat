import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"


const connectDB = async ()=>{
    try {
      const connetionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) 
      console.log(`MongoDB connected: ${connetionInstance.connection.host}`);
    } catch (error) {
        
        process.exit(1)
    }
}
export default connectDB;