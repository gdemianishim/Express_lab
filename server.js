const express = require("express");

const app = express(); //Calling this function sets up a server 

app.listen(3030);

app.get('/' , ()=> {
    console.log('Here');
    resizeBy.sen("Hello world");
}); //this funtion will run when someone goes to the root folder.
