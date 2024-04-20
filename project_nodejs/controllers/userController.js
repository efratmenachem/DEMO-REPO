//איפשור השליחה מכאן...
var express=require('express');
var myRouter=express.Router();

//טעינת המודל שיצרנו לחיבור טבלת המשתמשים
var users=require('../models/usermodel');

//שימוש בmiddleWare
// טעינה
var middW=require('../middleWare/a')
myRouter.use(middW)

//שליפת כל המשתמשים
myRouter.get('/getAll', (req, res)=>{
    users.find({}).then((data)=>{res.json(data)}).catch((err)=>{console.log(err)})
});

//הוספת משתמש
myRouter.put('/addUser',(req,res)=>{
    let newUser=req.body;
    users.create(newUser).then((data)=>{res.json(data)}).catch((err)=>{console.log(err)})
});

//שליפת משתמש עפ"י שם וסיסמא
myRouter.get('/getByNameAndPassword/:name/:password', (req, res)=>{
    let Name=req.params.name;
    let pass=req.params.password;
    users.find({name:Name,password:pass}).then((data)=>{res.json(data)}).catch((err)=>{console.log(err)})
    });

//עדכון/הוספה למשתמש
myRouter.post('/update/:id/:des',async(req,res)=>{
    let Id=req.params.id;
    let Des=req.params.des;

    let obj = await users.find({_id:Id}).then((data)=>{
        return data[0];
    });
    if(!obj.visited.includes(Des))
        obj.visited.push(Des);

        users.findByIdAndUpdate({_id:Id}, obj, {new: true}).then((data)=>{
            res.json(data)
        }).catch((err)=>{console.log(err)})
});

//שליפת יעדים שמשתמש ביקר עפ"י מזהה
myRouter.get('/getByIdVisited/:id',(req,res)=>{
    let Id=req.params.id;
    users.find({_id:Id}).then((data)=>{res.json(data[0].visited)}).catch((err)=>{console.log(err)})
});

// myRouter.delete('/dell/:email', (req,res)=>{
//     let mail=req.params.email;
    
//     users.findOne(mail).then((data)=>{
//         if(data.email==mail)
//         users.deleteOne({email:mail}).then((data)=>{res.json(data)}).catch((err)=>console.log(err))});
// });

myRouter.delete('/dell/:email', (req, res) => {
    let mail = req.params.email;
    users.findOneAndDelete({ email: mail })
        .then(() => { res.json({ message: "User deleted successfully" }); })
        .catch((err) => { console.log(err); });
});

module.exports=myRouter;
