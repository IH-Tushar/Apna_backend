const express = require("express")
const app = express();
const port = 8080 

app.use(express.urlencoded({extended: true }));
app.use(express.json());


app.get("/register", (req, res) => {
    let { username, password } = req.query;
    console.log(`the password is ${password}`);
    res.send(`hi i am user of this account : ${username}`)
})

app.get("/", (req, res) => {
    res.send("welcome")
})

app.post("/register", (req, res) => {

    let { username , password } = req.body
    res.send(`here is the user of this account ${username} 
        here is your password ${password}`)
})

app.listen(port, () => {
    console.log(`app is listing ${port}`); 
});
