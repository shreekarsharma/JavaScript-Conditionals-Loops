let number = 496;
let result = 0;
for (let i = 1; i <number;i++){
    if(number%i===0){
        result += i;
    }
}
if(number === result){
    console.log(number+" is a perfect number.");
    
}else{console.log(number + " is not a perfect number.");}