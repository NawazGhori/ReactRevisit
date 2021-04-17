//require is the predefined function used to import the modules
const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const mongodb = require("mongodb")


//create rest object app
//rest object, used to develop the rest services
//GET, POST, PUT, DELETE, HEAD, OPTIONS,.....
//we will prepare rest object with the help of express
const app = express();

//enable cors policy
app.use(cors());

//set JSON as communication language between client and server
app.use(bodyparser.json());

//read json coming from client
app.use(bodyparser.urlencoded({ extended: false }));


//creating mongoclient ref
const mclient = mongodb.MongoClient;


//create the get request
app.get("/products", (req, res) => {
    mclient.connect("mongodb+srv://admin:admin@rjs-05.1glav.mongodb.net/MERN?retryWrites=true&w=majority",
        (err, conn) => {
            if (err) throw err;
            else {
                const mydb = conn.db("MERN");
                mydb.collection("products").find().toArray((err, arr) => {
                    if (err) throw err;
                    else {
                        res.send(arr);
                    }
                });
            }
        });
});

//assign the port
let port = process.env.port || 8080;
app.listen(port, () => {
    console.log("server started");
})