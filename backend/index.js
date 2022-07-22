const express = require('express')
const cors = require('cors');
const app = express()
const connect = require("./mongoose/mongoose.js")
const port = process.env.PORT || 5500;
require('dotenv').config();
const notes = require("./Routes/TaskRoute.js");
const LoginRoute = require('./Routes/LoginRoute.js');
const AdminRoute = require('./Routes/AdminRoute');
const ChatRoute = require('./Routes/ChatRoute');
const mongoose = require('mongoose');
const Pusher = require("pusher");
const { collection } = require('./Schema/TasksSchema.js');

app.use(cors());
app.use(express.json());

app.use('/api/v1', LoginRoute);
app.use('/api/v1/tasks', notes)
app.use('/api/v1/admin', AdminRoute);
app.use('/api/v1/chat', ChatRoute);
app.get('/', (req, res) => {
    res.send("Works")
})


try {
    const connection = async () => {
        const setup = await connect(process.env.MONGO_URI)
        console.log("DB connected")
        app.listen(port, () => console.log(`App is listening at port ${port}`))
    }
    connection()
}
catch (err) {
    console.log(err)
}


//pusher 
const pusher = new Pusher({
    appId: "1435110",
    key: "27a83897dec9719635bf",
    secret: "8c951a4af86f986964de",
    cluster: "ap2",
    useTLS: true
});

//changeStream
const db = mongoose.connection;
db.on("open", () => {
    const collection = db.collection('chats');
    const changeStream = collection.watch();

    let newChangeStream;
    changeStream.once('change', next => {
        const resumeToken = changeStream.resumeToken;
        console.log(next)
        changeStream.close();

        newChangeStream = collection.watch([], { startAfter: resumeToken });
        newChangeStream.on('change', next => {
            console.log(next)
        });
    });
}
)

