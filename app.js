//IP Mario: 10.12.1.107:3000
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

//Express devuelve el index.html
app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/public/index.html');
});

//Escucho por Socket
io.on('connection', socket=>{
  socket.on('chat message', msg=>{
    io.emit('chat message', msg);
    console.log('message', msg);
  })
});

//Levanto Server
http.listen(3000,()=>{
  console.log('Server running, port:3000');
});
