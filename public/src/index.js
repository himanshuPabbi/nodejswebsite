const  express=require('express');
const path=require('path');
const port=9000;
const app=express();
const hbs=require('hbs');
//const staticPath=path.join(__dirname,'..');
const templatePath=path.join(__dirname,"../src");
const partialPath=path.join(__dirname,"../src/partials");

console.log(partialPath);
//console.log(templatePath);
app.set("view engine","hbs");

//we want to register partials in template enginee
hbs.registerPartials(partialPath);
console.log(templatePath);
//change the name of views folder to temaplate folder
//app.set("views",templatePath);

//serve static website
//app.use(express.static(templatePath));

//template enginee route
//top to down 
 app.get("/about",(req,res)=>{

    res.render('about');
});
app.get("/contact",(req,res)=>{

    res.render('contact');
});
app.get("/home",(req,res)=>{

    res.render('index');
});
app.get("/service",(req,res)=>{

    res.render('service');
});
app.get("/team",(req,res)=>{

    res.render('team');
});
app.get("/login",(req,res)=>{

    res.render('login');
});
app.get("/",(req,res)=>{

    res.render('index');
});
app.get("/about/*",(req,res)=>{

    res.render("404",{errorcomment:"Opps this about us page can't be found"});
});
app.get("*",(req,res)=>{

    res.render("404",{errorcomment:"Opps page can't be found"});
});
/* app.get("/home",(req,res)=>{

    res.send("This is home page");
});
app.get("/contact",(req,res)=>{
    res.send("This is contact page");

});
app.get("/service",(req,res)=>{
    res.send("This is service page");

});
*/
app.listen(port,()=>{
    console.log("Listening at port 9000");
})
