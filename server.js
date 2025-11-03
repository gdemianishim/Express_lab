const express = require("express");

const app = express()
app.set("view engine", 'ejs');  //Calling this function sets up a server 


app.get('/' , (req,res)=> {
    console.log('Here');
    res.render("index" , 
        {user: "George!" ,
}); 
app.get('/users', (req, res => {
    res.setEncoding("User List");
    

    app.get('/user/new', (req, res)=>{
        res.send('New User form');
    })
}))

app.listen(3030);