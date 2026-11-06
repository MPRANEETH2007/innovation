//  let name = 'PRANEETH';
// let year = 2026;
// let isTrue = true;

// console.log(name);
// console.log('this is with JS');
// console.log('college');
// let a=20;
// let b=10;
// console.log(a+b);
// console.log(a*b);
// console.log(a>b);
// console.log(a==b);
// let age=20;
// let hasID=true;
// console.log(age<=18 && hasID);
// console.log(age<=18 || hasID);


// let marks = 90
// if (marks>=90) {
//     console.log('grade a+');
// } 
// else if (marks>=80 && marks<90) {
//     console.log('grade a');
// } 
// else if (marks>=70 && marks<80) {
//     console.log('grade b');
// }
//  else if (marks>=60 && marks<70) {
//     console.log('grade c');
// } 
// else if (marks>=50 && marks<60) {
//     console.log('grade d');
// } 
// else if (marks>=40 && marks<35) {
     //console.log('grade e');
// }
// else {
//    console.log('grade f')
// }

// Function statements
// function greet(uname) {
//     console.log('Hello '+ uname);
// }
// greet('Praneeth')

// function add(a+b){
//     return a+b;
// }
// console.log(add(4,5));

// Function expression
// const multiply=function(x,y){
//     return x*y;
// }
// console.log(multiply(4,5));

//  Arrow function
// const subtract=(m,n)=>{
//     retun m-n;
// }
// console.log(subtract(40,20));


document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();
    let n1=document.getElementById('n1').value;
    let n2=document.getElementById('n2').value;
    let lovepercent=Math.floor(Math.random()*100);
    let  message=''
    if (lovepercent>=90) {
        message='made for each other ';
        
    }
    else if(lovepercent>=75 &&lovepercent<90){
        message='You still have a chance';
    }
     else if(lovepercent>=55 &&lovepercent<75){
        message='keep trying';
    }
    else{
        message='try on others';
    }
    document.getElementById('result').innerHTML=n1+' & '+
    n2 +' love bonding: '+lovepercent +'%'+ '<br><br>' + message

});