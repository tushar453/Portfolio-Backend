
const express = require('express');

require('./db/config');
const Details = require('./db/Details');
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());


app.post("/save",async(req,resp)=>{
    let details = new Details(req.body);
    let result =await details.save();

    
    resp.send(result);
      
    
   
      
    
    }
   
    
    );
    
    app.listen(4500);