const express = require("express")
const app = express()
const path = require("path");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))


app.get("/", (req, res) => {
    res.render("home.ejs");
    console.log("mr bird");
    })
app.get("/hi", (req,res) => {
    res.send("hello");
})

app.get("/dic", (req, res) => {
    let dicvalue = Math.floor(Math.random() * 6) + 1 ; 
    res.render("dic.ejs", {dicvalue})
})

// passusername
app.get("/ig/:username", (req,res) => {
    const followers = ["sakib","rokib","tushar","sunny"]
    let { username } = req.params;
    res.render("instragram.ejs", { username, followers })
     
})

app.listen(port, () => {
    console.log("server is runing");
    
})