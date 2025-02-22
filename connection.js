// 1) import mongoose
const mongoose = require('mongoose');

// 2) connection
mongoose.connect('mongodb+srv://vssreelakshmi05:sreelakshmi2005@cluster0.ihvhv.mongodb.net/FSD?retryWrites=true&w=majority&appName=cluster0')
  .then(() =>{ 
    console.log('Connected!')
})

.catch((err)=>{
    console.log(err)

})