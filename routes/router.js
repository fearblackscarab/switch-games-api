const express=require('express');
const router=express.Router();
const port=process.env.PORT || 3000;
router.use(express.static('public'));

router.get('/games',require('../routes/api/gamesRoute'));
router.get('/games/:id',require('../routes/api/singleRoute'))

router.get('/',(req,res)=>{
    res.render('pages/home',{
        title:'Home',
        name:'Switch Games Home Page'
    })
});


module.exports=router;