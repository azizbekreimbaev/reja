console.log("Web server creation stage");

const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');


//1. MongoDB chaqirish
const db = require('./server').db();
const mongodb = require('mongodb');
// console.log(db)

let user;

fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data)
    }
})


// 1 Starting Code

app.use(express.static("public"));  // static images css va boshqa elementlarni joylaymiz shu folderga
app.use(express.json());   // Client va Server ortasiddagi data JSON formatda boladi shuni OBJECTga otqazib beradi
app.use(express.urlencoded({ extended: true })); // html form post qilinganda input datalarni qanul qilib olish uchun kerak.


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
    console.log("user entered");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        console.log(data.ops)
        // console.log(data)
        res.json(data.ops[0])
        // if (err) {
        //     console.log(err);
        //     res.end("something went wrong");
        // } else {
        //     res.end("successfully added");
        // }
    })
    // res.end("success")
    // console.log('====================================');
    // console.log(req.body);
    // // console.log(req);
    // res.json({ test: "success" })
    // console.log('====================================');
},)


app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    console.log(id);
    db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) }, function (err, data) {
        res.json({ state: "success" });
    })
})

// console.log(1)
app.post("/edit-item", (req, res) => {
    // console.log(2)

    const data = req.body;
    // console.log(data);
    // console.log(3)
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) },
        { $set: { reja: data.new_input } },
        function (err, data) {
            res.json({ state: "success" });
        });
    // res.end("done")
})


app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({ state: "all items are being deleted!!!" });
        });
    }
})

app.get("/", (req, res) => {
    console.log("user entered");
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            // console.log(data);
            res.render('reja', { items: data });
        }
    })
})

app.get("/author", (req, res) => {
    res.render("author", { user: user });
})


module.exports = app;