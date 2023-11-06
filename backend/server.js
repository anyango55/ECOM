const app = require("./app");

// handling uncaught exception
process.on("uncaughtException", (err) =>{
    console.log("err.message");
    console.log("shutting down the server for handling uncaughtexception");
})

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "backend/config/.env",
    });
  }

  // connect db
connectDatabase();

//   create server
const server = app.listen(process.env.PORT,() =>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})

// UNHAM]NDLED PROMISE REJECTION

ProcessingInstruction.on("unhandledRejection", (err) => {
    console.log(`shutting down the server for ${err.message}`);
    console.log (`shutting down the server for unhandled promise rejection`)
    server.close(() => {
        process.exit(1);
    })
});