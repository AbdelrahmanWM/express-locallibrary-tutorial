const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
function logOriginal(req,res,next){
  console.log('Original')
  next();
}
function logMethod(req,res,next){
  console.log("Method");
  next();
}
const logStuff = [logOriginal,logMethod];

router.get('/log',logOriginal,(req,res)=>{
  res.send('done');
})
module.exports = router;
