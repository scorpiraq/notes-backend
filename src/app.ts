import express from 'express';
const app = express();
const port = 3000;
app.listen(port, ()=>{
    console.log("This server is running...");
    
})

app.get('/hello', (req, res) =>{
    res.send("This is my response");
})