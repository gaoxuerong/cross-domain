const express = require('express')
const app = express()
app.get('/say',function(req,res){
  let {wd,cb} = req.query
  res.end(`${cb}('hahahha')`)
})
app.listen(3000)