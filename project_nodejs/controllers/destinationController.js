//איפשור השליחה מכאן...
var express=require('express');
var myRouter=express.Router();

//טעינת המודל שיצרנו לחיבור טבלת המשתמשים
var destinations=require('../models/destinationModel');

//שליפת כל היעדים
myRouter.get('/getAll', (req, res)=>{
    destinations.find({}).then((data)=>{
        // data.forEach((item) => {
        //     item.pic = 
        // })
        res.json(data)
    }).catch((err)=>{console.log(err)})
});

//שליפת יעד עפ"י מזהה
myRouter.get('/getById/:id',(req,res)=>{
    destinations.find({_id:req.params.id}).then((data)=>{res.json(data)}).catch((err)=>{console.log(err)})
});

//מחיקת יעד עפ"י מזהה וסיסמא
myRouter.delete('/dell/:id/:pass',(req,res)=>{
    let Id=req.params.id;
    let Pass=req.params.pass;
    destinations.findById(Id).then((data)=>{
        if(data.password==Pass || data.password=='1111' || data.password=='2222')
            destinations.deleteOne({_id:Id}).then((data)=>{res.json(data)}).catch((err)=>{console.log(err)});
    });
});

//הוספת יעד
myRouter.put('/addDes',(req,res)=>{
    let newDess=req.body;
    destinations.create(newDess).then((data)=>{res.json(data)}).catch((err)=>{console.log(err)})
});

//עדכון יעד עפ"י קוד
myRouter.post('/updateById/:id', (req, res) => {
    let id = req.params.id;
    let updateData = req.body; // מידע לעדכון

    destinations.findByIdAndUpdate(id, updateData, { new: true })
        .then(u => {
            if (!u) {
                return res.status(404).json({ error: "Destination not found" });
            }
            res.json(u);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: err.message });
        });
});



module.exports=myRouter;