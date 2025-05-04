let number = 12321;
let reverse = 0;
let temp = number;
let mod = 0;
while(temp>0){
    mod = Math.floor(temp % 10);
    temp = Math.floor(temp / 10);
    reverse = (reverse*10)+mod;    
}
if(number == reverse){
    console.log('Number is palindrome');
}else{
    console.log('Number is not palindrome');
    
}