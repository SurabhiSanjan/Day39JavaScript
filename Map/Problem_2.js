// Problem 2

let arr = new Map();

let i = 1;
let one =0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;
while(one<=10 && two<=10 && three<=10 && four<=10 && five<=10 && six<=10){
    
    let randomNumber = Math.floor(Math.random()*6+1);
    
    if(randomNumber === 1){
        one++;
       // arr.set(1,one);
    }else if(randomNumber === 2){
        two++;
        //arr1.set(2,two);
    }else if(randomNumber === 3){
        three++;
        //arr2.set(3,three);
    }else if(randomNumber === 4){
        four++;
        //arr3.set(4,four);
    }else if(randomNumber === 5){
        five++;
        //arr4.set(5,five);
    }else if(randomNumber === 1){
        six++;
        //arr5.set(6,six);
    }

    arr.set(i,randomNumber);
    i++;
}

 console.log(arr);
