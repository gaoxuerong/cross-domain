const express = require('express')
const app = express()
let whiteList = ['http://localhost:3000']
app.use(function(req,res,next){
  let origin =  req.headers.origin
  if(whiteList.includes(origin)){
    //允许哪个源访问我
    res.setHeader('Access-Control-Allow-Origin',origin)
    //允许哪个头访问我
    res.setHeader('Access-Control-Allow-Headers','name')
    //允许哪个方法访问我
    res.setHeader('Access-Control-Allow-Methods','PUT')
    //允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials',true)
    //允许返回的头
    res.setHeader('Access-Control-Expose-Headers','name')
  }
  next()
})
// app.get('/getData',function(req,res){
//    console.log(req.headers)
//   res.end('i didn\'t like you')
// })
app.put('/getData',function(req,res){
  console.log(req.headers)
  res.setHeader('name','server')
  res.end('put put put')
})
app.use(express.static(__dirname))
app.listen(4000)