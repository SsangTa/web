// object2.js
// 내장객체
let numberAry = new Array();
let str = new String('abc');
let num = new Number(1);
let isAdult = new Boolean(true);
let today = new Date();

// 문자열 관련 메소드
str = 'Hello';
console.log(str.length);

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// charAt(indexValue)
console.log(str.charAt(4));
for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}

// concat() 두 문자열을 연결한 값을 반환
let newStr = str.concat('world');
console.log(newStr);

newStr = str + 'world';
console.log(newStr);

// indexOf('찾을 문자열') : 문자열의 index값 반환
let ind = newStr.indexOf('w');
console.log(ind);

let names = '홍길동, 김민수, 박시현, 최우진';
if (names.indexOf('김민수') != -1) {
    console.log('김민수 포함하고 있습니다.')
}

if (names.includes('김민수')) {
    console.log('김민수 포함하고 있습니다.')
}

// replace('찾을문자열', '변경할문자열')
let newNames = names.replace('김민수', '박민수');
console.log(newNames);

// substring(start, end)
console.log(names.substring(5, 8));
console.log(names.substring(10));


// slice(start, end);
console.log(names.slice(5, 8));
console.log(names.slice(10));
console.log(names.slice(-3));
console.log(names.slice(-8, -5));

let jumin = '000101-3456789';
let jumin2 = '000102-4456789';
let jumin3 = '0202043456789';



function checkGender(juminArg) {
    // 8번째 값을 체크 3=>남자, 4=>여자를 반환
    juminArg = juminArg.replace('-', '');
    let num = juminArg.substring(6,7);
    num = juminArg.slice(-7,-6);
    if (num == 3)
        return '남자';
    else
        return '여자';
}

console.log(checkGender(jumin)); //남자
console.log(checkGender(jumin2)); //여자
console.log(checkGender(jumin3)); //여자
