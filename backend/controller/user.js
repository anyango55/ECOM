const express = require("express");
const path = require("path");
const router = express.Router();
const {upload} = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require("fs");


router.post("/create-user",upload.single("file"),async (req,res) =>{
    const {name,email,password} = req.body;
    const userEmail = await User.findOne({ email });


    
    if(userEmail){
        const filename = req.file.filename;
        const filepath = `uploads/${filename}`;
        fs.unlink(file )
        return nextTick(new ErrorHandler("User already exists",400));
    }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);
    

    const user = {
        name: name,
        email: email,
        password: password,
        avatar: fileUrl
      };

      const newUser = await User.create(user);
      res.status(201).json({
        newUser,
      });

      

      // console.log(user);
  
});

module.exports = router;
