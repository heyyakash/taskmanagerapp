const express = require('express')
const cors = require('cors');
const app = express()
const connect = require("./mongoose/mongoose")
const port = 5500
require('dotenv').config();
const notes =require("./Routes/TaskRoute");
const LoginRoute = require('./Routes/LoginRoute');

app.use(cors());
app.use(express.json());

app.use('/api/v1',LoginRoute);
app.use('/api/v1/tasks',notes)

app.get('/',(req,res)=>{
    res.send("Works")
})


try{
    const connection = async()=>{
        const setup = await connect(process.env.MONGO_URI)
        console.log("DB connected")
        app.listen(port,()=>console.log(`App is listening at port ${port}`))
    }
    connection()
}
catch(err){
    console.log(err)
}

