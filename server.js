const mongoose = require("mongoose");
var express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");

// allowing cors
app.use(cors());
//using routes.js file
app.use(router);

app.get("/", (req, res) => {
  res.send("GET Request Called");
});

//creating server
const httpServer = require("http").createServer(app);
const PORT = "7000";
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});

const url =
  "mongodb+srv://francis:1234@cluster0.fjpa7.mongodb.net/bball?retryWrites=true&w=majority&appName=Cluster0";
const connectionParams = {
  useNewUrlParser: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });
