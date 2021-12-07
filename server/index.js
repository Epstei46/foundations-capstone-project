require("dotenv").config()
const express = require("express")
const cors = require("cors")
const ctrl = require("./controller")
const path = require('path');
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static(`client`))

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../client/main.html'));
});

app.get("/api/shows", ctrl.getAllShows)
app.post("/api/shows", ctrl.addShow)
app.delete("/api/shows/:id", ctrl.deleteShow)


const port = process.env.PORT || process.env.SERVER_PORT

app.listen(port, () => {
    console.log(`Server do be listening on port: ${port}`)
})

/* Alternate way to get my baseURL instead of using window.location.origin? But how do I make baseURL object available in my client folder? in main.js, 'require' is not defined so I cannot require('dotenv').config() && 'process' is not defined so I cannot use process.env.PATH. */
// const production = "https://simple-watch-list.herokuapp.com/api/shows";
// const development = "http://localhost:4242/api/shows";
// const baseURL = (process.env.PATH ? production : development);


// const { dirname } = require('path');
// let appDir = dirname(require.main.filename);
// /* appDir = __dirname. Issue is that the root folder when testing on localserver is the server folder, so below, I am removing "server" from the root folder string. If I try to res.sendfile("../client/main.html") then I get a forbidden error because I am trying to go up/back a folder, not allowed in the browser. Alternatively, could have used path.join which would have allowed the "/../" */
// if (appDir.includes("server")){
//     appDir = appDir.substring(0,appDir.length-7)}
// app.get("/", function (req, res) {
//     res.sendFile(appDir + "/client/main.html");
// });