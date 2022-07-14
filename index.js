const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoute=require("./routes/auth");
const userRoute=require("./routes/users");
const postRoute=require("./routes/posts");
const multer=require("multer");
const path=require("path");
dotenv.config();
app.use(bodyParser.json());
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")))
 mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
   const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
  app.use("/auth",authRoute);
  app.use("/users",userRoute);
  app.use("/posts",postRoute);
app.use("/arthi",(req,res)=>{
    console.log("hey hello")
})
console.log("hi");
app.listen("5000",()=>{
    console.log("backend successfully connect");
})