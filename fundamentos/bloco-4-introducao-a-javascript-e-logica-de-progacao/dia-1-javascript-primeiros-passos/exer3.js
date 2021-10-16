const n1 = 14;
const n2 = 27;
const n3 = 5;

let maiorNum;

if(n1>n2 && n2>n3){
    maiorNum = n1;
}else if(n2>n1 && n1>n3){
    maiorNum = n2;
} else {
    maiorNum = n3;
}
    console.log(maiorNum);