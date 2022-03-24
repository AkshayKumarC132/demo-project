function greetings() {
    var name = prompt ('what is your name');
    var result = 'Hello'+' ' + name;
    console.log(result);
}
//greetings();
function sumNumber(n1,n2){
    var result = n1+n2;
    console.log(result);
}
//sumNumber(10,15);
function greetings(yourName){
    var result = 'Hello'+' '+yourName;
    console.log(result); 
}
//var Name = prompt('What is your name?');
//greetings(Name);


function WEB (){
    var name = prompt ('What is Your web name');
    var result = 'this is your '+ name;
    console.log(result);
}
//WEB ();

function sum(n1, n2){
    var n1= prompt('Enter 1st value');
    var n2= prompt('Enter 2nd value');
    //var sumresult = (n1 += n2);
    console.log(n1+=n2);
}
//sum();

function test(){
    var x = 10;
    var y = 20;
    //var sum = x +=y;
    console.log(x+=y);
}
//test();

function test1(){
    var x= 100;
    var y= 200;
    var result = 'Sum = ';
    console.log(result + (x+=y));
}
//test1();

/*var num=0;
for(let num =1; num<=100; num++){
    console.log(num);
}*/

/*let num = 0;
while (num<100){
    num+=1;
    console.log(num);               // While loop
}*/
 
/*var num=0;
for(let num=1; num<=100; num++){
    console.log(num);                   // for loop
}*/
/*
let yourname= 'Raj';
console.log(yourname);  // string datatypes.
*/
/*
let name = {Firstname: 'Raj ',   Lastname : 'Reddy'};
console.log(name);                                      // Objective datatypes
*/

/*
let truth = false;
console.log(truth);             // Boolean
*/

/*
let chain =['block','chain','tech'];
console.log(chain);                     // array datatypes
*/
/*
let nothing = null;
console.log(nothing); 
*/                                      // value null

//      strings in javascript(common methods)   //

/*
let fruit = 'banana';
let moreFruits = 'banana\apple';
console.log(fruit.length);
console.log(fruit.indexOf('na'));
console.log(fruit.slice(0, 6));
console.log(fruit.replace('b','B'));
console.log(fruit.replace('a','A'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.split(''));
*/

const a=10;

a=30;
console.log(a);