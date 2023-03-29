
const express = require('express');
var application_root = __dirname;
require('./db/config');
const Details = require('./db/Details');
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
bodyParser = require('body-parser');
path = require( 'path' );



//
app.use( express.static( path.join( application_root, '/save') ) );
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





app.post("/save",async(req,resp)=>{
    let details = new Details(req.body);
    let result =await details.save();
console.log(req.body);
    
    resp.send(result);
      
    
   
      
    
    }
   
    
    );
    
    app.listen(4500);