import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/todoRoutes.js"

//confog dotenv
dotenv.config();

//rest object
const app=express();

const port=process.env.PORT||5000

//middleware
app.use(cors());
app.use(express.json());

//all routes
app.use("/api", routes);

//rest api
app.get('/',(req,res)=>{
    res.send({
        message:'Welcome to e commerce app'
    });
});
//connect mongodb
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("mongodb connected...."))
.catch((err)=>console.log(err));

//run listen
app.listen(port,()=>{
    console.log(`Server is running ${port}`);
    
});







