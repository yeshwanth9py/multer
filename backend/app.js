const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");





app.use(cors());

  
const multer  = require('multer')
// upload file in the tmp folder

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './tmp')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now();
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })

// const upload = multer({ storage: storage })

// or


// get a buffer for file to send anywhere
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


app.post("/post", upload.single('file'), (req, res)=>{
    

    // convert buffer to file
    const buffer = Buffer.from(req.file.buffer, "utf-8");
    const filePath = "./tmp/a.png";

    fs.writeFile(filePath, buffer, (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
        console.log('Buffer successfully written to file:', filePath);
      });


    
    res.json(req.file);
});

app.listen(3000, ()=>{
    console.log("server started listening at port 3000");
})