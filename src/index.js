const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const categoryRoutes = require("./routes/category");
const customerRoutes = require("./routes/customer");
const deliveryRoutes = require("./routes/delivery");
const employeeRoutes = require("./routes/employee");
const searchRoutes = require("./routes/search");

var cors = require("cors");

const app = express();
const port = process.env.PORT || 9000;
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
//Middleware
app.use(express.json());
app.use("", categoryRoutes);
app.use("", customerRoutes);
app.use("", deliveryRoutes);
app.use("", employeeRoutes);
app.use("", searchRoutes);
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("bienvenido");
});

//MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("Server listening on port", port));
