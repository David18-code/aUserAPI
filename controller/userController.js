let userModel = require('../model/userScheme');
module.exports = postUser = async(req,res)=>{
    //get data from the client
   let{name, email, password} = req.body;
   
   
   //making an instance of Usermodel and inserting into collection USER
   let aUser = new userModel({
     name: name,
     email : email,
     password : password
   });
   
   try {
     await aUser.save();
   res.send("success");
   } catch (error) {
     console.log()
   }
   
     }

     module.exports = allUsers = async(req,res)=>{
        //res.send("This is home page");
       // Select from users
       try {
        let allUsers = await userModel.find({}).exec();
        res.send(allUsers);
       } catch (error) {
        console.log(err);
       }
      }

     module.exports = aUser = async(req,res)=>{
        let ID = req.params.id 
       // Select * from users
      try {
        let aUser = await userModel.findById(ID).exec();
        res.send(aUser);
        console.log(aUser);
      } catch (error) {
        console.log(error);
      }
      }

     module.exports = editUser =  async(req,res)=>{
        //res.send(req.params.id);
        let ID = req.params.userId ;
        let {name,password}= req.body;
        
        try {
          let editR = await userModel.findByIdAndUpdate( ID ,   {
            name,
            password
            
            })
        
            res.send(name +"was edited sucessfully")
        
        } catch (error) {
          console.log(error)
        }
        }

       module.exports = deleteUser = async(req,res)=>{
            let ID = req.params.id ;
           try {
            await userModel.findByIdAndDelete(ID);
            res.send ("record successfully deleted");
           } catch (error) {
            console.log(error)
           }
          }