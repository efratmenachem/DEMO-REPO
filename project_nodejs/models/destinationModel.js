//טעינת המודל המאפשר חיבור-מונגו
var myMongoose=require('mongoose');

//הגדרת מבנה הטבלה שתישלף
var destinationsModel=new myMongoose.Schema({

    Destination:String,            //שם היעד
    weather:String,                //מזג אויר
    description:String,            //תיאור
    pic:String,                    //תמונה
    stars: String,                 //דירוג בכוכביות
    duration: String,              //משך זמן הטיסה
    password:String,               //סיסמא של מי שהכניס להאתר
    attractions:Array,             //מערך אטרקציות שיכיל שם אטרקציה ומחיר עלות
    stuff:Array,                   //חפצים שמומלץ להצטייד איתם
    lication:String                // מיקום היעד
});

//שם שנתנו לטבלה, אובייקט שמגדיר את מבנה הטבלה, שם הדטהבייס בפועל
var myDestinations=myMongoose.model('myDataBaseDestination',destinationsModel,'destinations');
module.exports=myDestinations;

