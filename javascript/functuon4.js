// function4.js
// for반목문 : 반복회수 지정 가능.

var sum = 0;
for (let i = 0; i < 10; i++) {
    sum += i;
}
console.log(`sum: ${sum}`);

console.clear();
var cnt = 0;
var isTrueFalse = false;
while (isTrueFalse) {
    console.log(cnt);
    if (Math.floor((Math.random() * 6)) == 4) {
        // break;
        isTrueFalse = false;
    }else {
        isTrueFalse = true;
    }
    console.log(cnt);
    cnt++;
}
console.log('마지막값: ' + cnt);


isTrueFalse = false;
do {
    if (Math.floor((Math.random() * 6)) == 4) {
        // break;
        isTrueFalse = false;
    } else {
        isTrueFalse = true;
    }
    console.log(cnt);
    cnt++;
}while (isTrueFalse);
console.log('마지막값: ' + cnt);

// while 구문으로  ->  임의의 난수 1 ~ 10 까지의 생성하고
// Math.floor(Math.random() * 10) + 1; 1 <= ? < 11;      < 1 ~ 10까지 숫자 만들어지는 구문
// 임의의 값이 5가 될때까지 sum의 값에 누적하는 반복문.
sum = 0;

while (true) {
    var temp =Math.floor(Math.random() * 10) + 1;
    sum += temp;
    console.log(temp);
    if (temp == 5 ){
        break;
    }
}
console.log(`누적된 값: ${sum}`);

console.clear();
sum = 0;
while(true) {
    
    var inputVal = prompt('값을 입력하세요. 종료하려면 0을 입력하세요. ');
    sum += parseInt(inputVal);
    if(inputVal == 0) {
        break;
    }
}
console.log(`누적된 값: ${sum}`);





// for (let i = 0; i < 5; i++) {
//     var temp = Math.floor((Math.random() * 6)); // 0 ~ 6사이의 임의 난수.(6을 곱했기때문)
//     console.log(temp);
//