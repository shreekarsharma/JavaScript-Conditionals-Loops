let a = 78;
let b = 324;
let gcd = 0;
let min = 0;
if(a>b){
    min = b;
}else{
    min = a;
}
for (let i = min; i >= 2; i--) {
    if((a%i==0)&&(b%i==0)){
        gcd = i;
        break;
    }
}
console.log("The GCD of "+a+" and "+b+" is "+gcd);