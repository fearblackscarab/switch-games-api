const express=require('express');
const router=express.Router();
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));

router.get('/games/:id',(req,res)=>{
    const id=req.params.id;
    const url=`https://api.sampleapis.com/switch/games/${id}`;
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/singlePage',{
            title:`${data.name}`,
            name:`${data.name}`,
            data
        })
    })
});

module.exports=router;