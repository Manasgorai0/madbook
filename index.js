// node server which will handle socket io connections
const PORT = process.env.PORT || 8000;
const io = require("socket.io")(PORT);
 io.on('connection', socket=>{
     console.log('new user connected');
     socket.on('new-user-joined', name=>{
         console.log("New user", name);
    
         socket.broadcast.emit('user-joined', name);
     });

     socket.on('Coummand', message=>{
         socket.broadcast.emit('Coummand', message)
     });
     socket.on('res', res=>{
       socket.broadcast.emit("res",res);
     });

     socket.on('disconnect', ()=>{
       console.log('user disconnect');
        socket.emit('connections', 'User ofline now');
    });
 })
