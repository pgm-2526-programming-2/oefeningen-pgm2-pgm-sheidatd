function sum (x,y) { //callback
    return x + y
    
};
function doMath(x , y , fn) {
    return fn(x , y)
    
} ; //mother

console.log(doMath( 5 , 3 , sum));


// tamrin 6 : 
function mainLogic(callback) {
  // تابع مادر
  callback(); // اجرای callback
}

function myCallback() {
  console.log("Dit is de callback-functie");
}

mainLogic(myCallback);



