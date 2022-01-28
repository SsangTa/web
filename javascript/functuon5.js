// function5.js

// 1 ~ 10까지의 임의수를 생성
// sum_2:(2의배수값 담는변수) sum_3:(3의배수값 담는변수) sum_6:(6의배수값 담는변수) sum_etc:(나머지값 담는변수)

var sum_2 = 0,
    sum_3 = 0,
    sum_6 = 0,
    sum_etc = 0;
while (true) {
    var temp =Math.floor(Math.random() * 10) + 1;
    // 각 변수의 누적.
    sumTotal = sum_2 + sum_3 + sum_6 + sum_etc
    console.log(temp)
    if (sumTotal >= 100) {
        break;
    } else if (temp%2 == 0 && temp%3 == 0 ) {
        sum_6 += temp;
    } else if (temp%2 == 0) {
        sum_2 += temp;
    } else if (temp%3 == 0) {
        sum_3 += temp;
    } else {
        sum_etc += temp;
    }
}
console.log(`2의 배수는 ${sum_2}`)
console.log(`3의 배수는 ${sum_3}`)
console.log(`6의 배수는 ${sum_6}`)
console.log(`etc의 배수는 ${sum_etc}`)

