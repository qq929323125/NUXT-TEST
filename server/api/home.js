const Router = require('express')
const router=Router();

router.get('/home',(req,res,next)=>{
    res.json("王五")
})

module.exports = router;
