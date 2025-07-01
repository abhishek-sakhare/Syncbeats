const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

require('./database/config');

const User = require('./database/User');

app.post("/register",async (req,resp)=> {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
})

app.post("/login", async (req,resp)=> {

    if(req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if(user) {
        resp.send(user);
        }
        else {
        resp.send({result:'No User Found'});
        }
    }
    else {
        resp.send({result:'No User Found'});
    }

    

})






app.get("/",(req,resp)=> {
    resp.send("The app is Working...");
})

app.listen(5000);