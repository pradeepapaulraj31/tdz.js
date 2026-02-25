let a=5;
let b=5;
let c=15;
if(a+b>c &&a+c>b&&b+c>a){
    if(a===b &&b===c){
        console.log("equilateral triangles");
    }
    else if(a===b ||b===c||a===c){
        console.log("isosceles triangles");{

        }
    }else {
        console.log("scalene triangles");
    }
}else{
    console.log("not a triangle");
}
