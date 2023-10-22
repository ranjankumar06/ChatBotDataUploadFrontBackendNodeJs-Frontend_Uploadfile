const express = require("express");
const multer = require('multer');
const Controller = require("../controller/controller");

const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Set the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      const extension = path.extname(file.originalname);
      const fileName = Date.now() + extension;
      cb(null, fileName); // Save the file with a unique name and original file extension
    }
  });
 
const upload = multer({storage:storage})

const router = express.Router();


router.post("/upload/file",upload.single("image"), Controller.photoVideoUplode);



module.exports = router;















