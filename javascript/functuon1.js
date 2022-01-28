// function1.js

function addNumber(first, last) { // function정의문
    var sum = first + last;
    console.log(`두수의 합: ${sum}`);
    return sum;
}

var sum1 = addNumber(10, 20); // function 실행문
var sum2 = addNumber(100, 200);

var result = addNumber(sum1, sum2);
console.log(`최종합계 : ${result}`);

result = addNumber('Hello', ' World');
console.log(result);



// function getMonthDay(month) {
//     // 1일의 요일정보를 반환해주는 기능.
//     // 일요일 : 0, 월요일: 1, 화요일:2, 수요일:3, 목요일:4, 금요일:5, 토요일:6
//     var monthDay = 0;
//     // if (month == 1) {
//     //     monthDay = 6;
//     // } else if (month == 2) {
//     //     monthDay = 2;
//     // } else if (month == 3) {
//     //     monthDay = 2;
//     // } else if (month == 4) {
//     //     monthDay = 5;
//     // } else if (month == 5) {
//     //     monthDay = 0;
//     // } else if (month == 6) {
//     //     monthDay = 3;
//     // } else if (month == 7) {
//     //     monthDay = 5;
//     // } else if (month == 8) {
//     //     monthDay = 1;
//     // } else if (month == 9) {
//     //     monthDay = 4;
//     // } else if (month == 10) {
//     //     monthDay = 6;
//     // } else if (month == 11) {
//     //     monthDay = 2;
//     // } else if (month == 12) {
//     //     monthDay = 4;
//     // } else {
//     //     monthDay = 0;
//     // }
//     // return monthDay;
// }


function getMonthDay(month) {
     // 1일의 요일정보를 반환해주는 기능.
     // 일요일 : 0, 월요일: 1, 화요일:2, 수요일:3, 목요일:4, 금요일:5, 토요일:6
    var startVal = 6; // 6+31 => 7 나누면 나머지 => 2
    var point = []; //[6,2,....] > 월별 요일밀리는 일수
    var prevVal = startVal;
    for (let i = 0; i < 12; i++) {
        if (i > 0) {
            prevVal = (prevVal + getLastDate(i)) % 7;
        }
        console.log(point);
        point[i] = prevVal;
    }
    return point[month - 1];  // 1월달->배열의 첫번째위치
}




function getLastDate(month) {
    var lastDate = 31;

    switch (month) {
        case 2:
            lastDate = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            lastDate = 30;
            break;
        default:
            lastDate = 31;
    }
    return lastDate;
}
var month = 2;
console.log(`${month}월의 마지막 날은 ${getLastDate(month)}`);