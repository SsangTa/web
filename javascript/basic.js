// basic.js 파일입니다.
// 자바스크립트 코드 작성
// 단축키 등록 ->beautify selection + 단춘키 등록 후 엔터 (ctrl + ;)
var age = 10; // number
age = 12.3;
var fullName = '홍길동'; // string 문자열 "", ''
var marriage = false; // boolean 타입
console.log(typeof marriage); // console.log(typeof ); > 타입을 확인할 수 있는 선언문
console.log(typeof age);
console.log(typeof fullName);

var hobby; // undefined 
hobby = null; // undefined상태에서 null값 주면 아무 값이 없는 상태가됨. / object 타입
hobby = 'reading';
hobby = 200; //변수: 10 -> 20 -> hello. 변수는 계속변한다. 자바스크립트는 변수를 계속선언해도 에러가 안생김.
var hobby = false;

// let hobby = 100;
fullName = prompt('이름을 입력하세요: '); //prompt(); > 입력받는 창을 띄워준다.
age = prompt('나이를 입력하세요: ');

console.log(typeof hobby);


console.log('이름은 ' + fullName + ', 나이는 ' + age);

