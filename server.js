const express = require("express");
const app = express();
const initRoutes = require("./src/routes/web");

// Cho phep xu li data tu form method post
app.use(express.urlencoded({extended:true}));

initRoutes(app);

let port = 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});