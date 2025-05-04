let n = 5;
for (let i = 1; i <= n; i++){
    let line = "";
    for(let j = 1;j<=n-i;j++){
        line += " ";
    }
    for(let k = 1; k<=i;k++){
        line += k;
    }
    for(let l = i-1; l>=1; l--){line +=l;
    }
    console.log(line);   
}