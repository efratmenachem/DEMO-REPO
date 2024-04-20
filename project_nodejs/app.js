//מאפשר טעינת מודל
var express=require('express');
var app=express();

//איפשור התחברות לריאכט
let cors=require('cors');
app.use(cors());

var path=require('path')
app.use(express.static(path.join(__dirname,'public')))

//מאפשר קבלת נתונים מהלקוח
var bodyParser=require('body-parser');
app.use(bodyParser.json());

//יצירת שרת
app.listen(7777,()=>{
    console.log("runing!!!!!");
});

//טעינת הקונטרולרים
var user=require('./controllers/userController');
app.use('/myUsers',user);

var dest=require('./controllers/destinationController');
app.use('/myDestination',dest);

//טעינת המודל
var myMongoose=require('mongoose');

//חיבור למסד הנתונים
myMongoose.connect("mongodb://localhost:27017/dbProject", { useNewUrlParser: true, useUnifiedTopology: true });

//הגדרת משתנה שיכיל את הדטהבייס
var db=myMongoose.connection;
db.on('open',()=>{
    console.log("open!!!!!!!!!!!!");
});