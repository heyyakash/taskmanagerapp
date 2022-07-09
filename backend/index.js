const express = require('express')
const cors = require('cors');
const app = express()
const connect = require("./mongoose/mongoose.js")
const port = process.env.PORT || 5500;
require('dotenv').config();
const notes =require("./Routes/TaskRoute.js");
const LoginRoute = require('./Routes/LoginRoute.js');
const AdminRoute = require('./Routes/AdminRoute');
const ChatRoute = require('./Routes/ChatRoute');

app.use(cors());
app.use(express.json());

app.use('/api/v1',LoginRoute);
app.use('/api/v1/tasks',notes)
app.use('/api/v1/admin',AdminRoute);
app.use('/api/v1/chat',ChatRoute);
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

