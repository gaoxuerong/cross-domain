const express = require('express')
const app = express()
let webSocket = require('ws')
const wss = new webSocket.Server({port:3000})
wss.on('connection',function(ws){
  ws.on('message',function(data){
    console.log(data)
    ws.send('我不爱你')
  })
})
