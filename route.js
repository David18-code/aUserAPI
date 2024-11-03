let userController =require ('./controller/userController.js');

let express = require('express'); 
router = express.Router()

//get http request - GET
router.get('/all-users', allUsers);
  
  // router.post("/register",  (req,res)=>{
  //     res.send("Post request!!!");
  //     console.log(req.body.name);
  // });

//post request
  router.post('/register', postUser);


  //put/patch request ; Edit
router.put('/edit-user/:userId', editUser);


//delete request
router.delete('/delete/:id', deleteUser);

// GET a user
router.get('/a-user/:id', aUser);

module.exports = router ;

