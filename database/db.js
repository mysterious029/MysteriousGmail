import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

const Connection = () =>{
    const DB_URI=`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-emc5gcf-shard-00-00.vlltr4h.mongodb.net:27017,ac-emc5gcf-shard-00-01.vlltr4h.mongodb.net:27017,ac-emc5gcf-shard-00-02.vlltr4h.mongodb.net:27017/?ssl=true&replicaSet=atlas-idhsn7-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
    mongoose.connect(DB_URI,{useNewUrlParser: true});
    console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}


export default Connection;