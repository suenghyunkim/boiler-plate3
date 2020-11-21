const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://johnahn:abcd1234@boilerplate.jyqvz.mongodb.net/<dbname>?retryWrites=true&w=majority',{
  useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(() => console.log('mongoDb connection ... '))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!') 
})

app.post('/register',(req,res)=>{
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})