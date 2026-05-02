const http = require('http');
const mongodb = require('mongodb');

let db;
// const connectionString = "mongodb+srv://aziz_reimbaev:wbag1DucHRN8UVo7@cluster0.bngytxk.mongodb.net/reja";
const connectionString = "mongodb+srv://aziz_reimbaev:wbag1DucHRN8UVo7@cluster0.bngytxk.mongodb.net/reja?retryWrites=true&w=majority";

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) console.log("ERROR on connection  MOngoDb");
    else {
        console.log("MongoDB connection succeed");
        // console.log(client)
        module.exports = client;
        const app = require('./app');
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(`The server is running successfully on port ===> ${PORT} , http://localhost:${PORT}`);
        })
    }
});


