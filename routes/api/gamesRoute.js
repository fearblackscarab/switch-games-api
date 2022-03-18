const express=require('express');
const router=express.Router();
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));

router.get('/games',(req,res)=>{
    const url='https://api.sampleapis.com/switch/games';
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/games',{
            title:'Games',
            name:'All Games',
            data
        })
    })
});

module.exports=router;