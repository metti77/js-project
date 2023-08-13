console.log("connected...");

//var w , s , g;
//var number=12; 
//var name="ali";
//var null=23 + amir ; multiple 


w=5 ;
s=85;
g=w*s;

//document.write(g);
//window.alert("heey");

var a={name1:"ali",name2:"mamad"};
document.write(a.name1+"  "+a.name2);
//document.write(a.name2); var object  (upside)
var a=(10);
var b=(20);

var iscomplete=true;  //boolean  
var isdelete=0;
//var isequal=(a==b);

//document.write(isequal);

//arrays
var colors=["red","blue","pink"];
//var names= array("ali","hosien");

var ali=[32,52,85,"koln",true];
console.log(ali [3]);

var colors3=["black","white","yellow"];
//colors2.reverse();
//colors2.shift();
//colors2.unshift("vivi");
//colors2.pop();
//colors2.push("jiji");

//var result=colors3.indexOf("white");
var n =colors3.join( " - " );

console.log(n);

//conditional orders

var g=5;  //model 1
var u=9;
if(g==u){
    document.write("true");
}else{
    document.write("false");
}

var p=2,k=2; //model2

//if(p>k){
    //console.log("bozorg");
//}else{
    //console.log("kochak");
//}


var t=55,w=55;  //model3
var isequal;
if(t==w){
    isequal=true;
}else{
    isequal=false;
}
//console.log("this is answer :"+isequal);

var m=2,n=5;  // model yek khati (kotah)
var isequal;
m==n ? isequal=true : isequal=false;

console.log("javab: "  + isequal);

