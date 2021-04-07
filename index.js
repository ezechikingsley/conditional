/*
let x =10
if(x<9) {
    console.log(x+"is less than 9")
}
else if(x<10) {
    console.log(x+"is less than 10")
}
else if(x<=10){
    console.log(x+"is less than or equal to 10")
}
else{
    console.log("i think" + x + "is greater than 10")
}
*/
/*
let x=0
if(x){
    console.log("value of x=" + x)
}
else{
    console.log(x+"is a falsy value")
}
*/

function count (start, end, add){
    for (start=1; start<=end; start+= add)
    console.log(start)
}
    count(1,100,10)