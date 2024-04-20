//טעינת המודל המאפשר חיבור-מונגו
var myMongoose=require('mongoose');

//הגדרת מבנה הטבלה שתישלף
var userModel=new myMongoose.Schema({

    name:String,
    password:String,
    email:String,
    isManager:Boolean,
    phone:String,
    visited:Array
    
});

//שם שנתנו לטבלה, אובייקט שמגדיר את מבנה הטבלה, שם הקולקשן בפועל
var myUsers=myMongoose.model('myDataBaseUsers',userModel,'users');
module.exports=myUsers;
