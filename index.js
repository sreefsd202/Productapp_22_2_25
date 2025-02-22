// 1) import express
const express = require('express')
require("./connection")
var pModel = require("./model/product")

// 2) initialize
const app = express()


//midd
app.use(express.json());

// 3) api creation
app.get('/helo',(req, res)=>{
    res.send('Hello World')
  })


//3.1)add api
app.post('/add',async(req,res)=>{
    try {
        await pModel(req.body).save()
        res.send({message:"Data Added"})
    } catch (error) {
        console.log(error);
    }
})

//3.2) view api
app.get("/view",async(req,res)=>{
    try {
       const data=await pModel.find()
       res.send(data);
    } catch (error) {
        console.log(error);
    }
})
//3.3) update api
app.put("/up/:id",async(req,res)=>{
    try {
       const update=await pModel.findByIdAndUpdate(req.params.id,req.body)
       res.send("data updated");
    } catch (error) {
        console.log(error);
    }
})

//3.4) delete api
app.delete("/delete/:id",async(req,res)=>{
    try {
       await pModel.findByIdAndDelete(req.params.id)
       res.send("data deleted");
    } catch (error) {
        console.log(error);
    }
})
// 4) port setting
app.listen(3004,()=>{
    console.log("server is running");
    
})