const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config({ silent: process.env.NODE_ENV === "production" });

// middlewares
app.use(express.json());
app.use(cors());

//routes
const ducksDataRoute = require("./routes/ducksDataRoute");
app.use("/ducksData", ducksDataRoute);

app.get("/", (req, res) => {
  res.status(200).send({ message: "default path works" });
});

// connect to the database
const dbconfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGO_DB_URL, dbconfig, () =>
  console.log("Connected to db")
);

const connection = mongoose.connection;
connection.on("error", (error) => console.log("ERROR", error));

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`SERVER RUNNING ON PORT ${PORT}. http://localhost:${PORT}`)
);
