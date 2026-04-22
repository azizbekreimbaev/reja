console.log("Web server creation stage");

const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');


let user;

fs.readFileSync("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data)
    }
})


// 1 Starting Code

app.use(express.static("public"));  // static images css va boshqa elementlarni joylaymiz shu folderga
app.use(express.json());   // Client va Server ortasiddagi data JSON formatda boladi shuni OBJECTga otqazib beradi
app.use(express.urlencoded({extended: true})); // html form post qilinganda input datalarni qanul qilib olish uchun kerak.


// 2 Session code


// 3 Views code
//BSSR backendda frontend yasaymiz clientga yuiborish uchun.  EJS dan foydalanamiz views folder uchun

app.set("views", "views");      //  views - views folderdan oladi
app.set("view engine", "ejs"); // enngine ejs 


// 4 Routing code
// app.get("/", function(req, res) {
//     res.end(`<p style = "font-size: 24px; font-weight: 900"> Hello World from MIT </p>`);
// });

// app.get("/about", function(req, res) {
//     res.end(`<p style = "font-size: 24px; font-weight: 900"> Page About Us </p>`);
// });

// app.get("/payment", function(req, res) {
//     res.end(`<p style = "font-size: 24px; font-weight: 900"> Payment Page </p>`);
// });

app.post("/create-item", (req, res) => {
    console.log('====================================');
    console.log(req.body);
    // console.log(req);
    res.json({test: "success"})
    console.log('====================================');
},)

app.get("/", (req, res) => {
    res.render('harid');
})

app.get("/author" , (req, res) => {
    res.render("author", {user: user});
})


const server = http.createServer(app);

let PORT = 3000;


server.listen(PORT, function () {
    console.log(`The server is running successfully on port ===> ${PORT}`);
    
})