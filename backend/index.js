const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Home Route"});
})

app.listen(8080,()=>{
    console.log("app is running at port 8080");
})