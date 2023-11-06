const express = require("express");
const ErrorHandler = require("./utils/ErrorHandler");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "backend/config/.env",
    });
  }

  // import routes
const user = require("./controller/user");

app.use("/api/v2/user", user);

//   errror handling
app.use(ErrorHandler);
module.exports = app;

// INSTALL npm i rexpress-fileupload 1:51 npm uninstal expreess file upload npm i multer 2:05
// npm i axios 2:16