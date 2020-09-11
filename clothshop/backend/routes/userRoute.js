import express from 'express';
import User from '../models/userModel';


const router = express.Router();

router.post("/api/sigin" , async(req,res)=>{
   const siginUser = await User.findOne({
       email: req.body.email,
       password:req.body.password
   });

   if(siginUser){
       res.send({
           _id: siginUser.id,
           name:siginUser.name,
           email: siginUser.email,
           isAdmin:siginUser.isAdmin,
           token:getToken(user) 
       })

   }else{
       res.status(401).send({msg:'Invalid Email or Password.'});
   }
})

router.get("/createadmin", async(req,res)=>{
    try {
        const user = new User({
            name: 'Richard Iyama',
            email:'richo4real2002@yahoo.com',
            password: '1234',
            isAdmin: true
        });
    
        const newUser = await user.save();
        res.send(user);

    } catch (error) {
        res.send({msg: error.message});
    }
    
   
});

export default router;