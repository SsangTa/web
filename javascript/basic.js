// basic.js 파일입니다.
// 자바스크립트 코드 작성
// 단축키 등록 ->beautify selection + 단춘키 등록 후 엔터 (ctrl + ;)
var age = 10; // number
age = 12.3;
var fullName = '홍길동'; // string 문자열 "", ''
var marriage = false; // boolean 타입


// console.log(typeof marriage); // console.log(typeof ); > 타입을 확인할 수 있는 선언문
// console.log(typeof age);
// console.log(typeof fullName);

var hobby; // undefined 
hobby = null; // undefined상태에서 null값 주면 아무 값이 없는 상태가됨. / object 타입
hobby = 'reading';
hobby = 200; //변수: 10 -> 20 -> hello. 변수는 계속변한다. 자바스크립트는 변수를 계속선언해도 에러가 안생김.
var hobby = false;
hobby = '';

// let hobby = 100;
// fullName = prompt('이름을 입력하세요: '); //prompt(); > 입력받는 창을 띄워준다.
// age = prompt('나이를 입력하세요: ');

// tool 다운하기 왼쪽 젤밑 클릭 > "Beaytify"검색후 다운
// File 클릭 > Preference 클릭 > keyboard Shortcuts > 검색으로 Beaytify까지 찾아서 'ctrl + ;' 로설정 > 자동정렬 기능임

// Selection > 제일밑 Column Selection Mode > 이건 태그제외하고 값만 복사가능

console.log(typeof hobby);


console.log('이름은 ' + fullName + ', 나이는 ' + age);

if(hobby){  // 값이 있으면 true 반환. 값이 없으면 : 0 , '', null => false반환.
    console.log('취미는 ' + hobby); 
}

var sum = 100 - 90;
if(sum){
    console.log('sum: ' + sum); 
}
// sum => 10
for (let i=0; i<10; i++){
    sum = sum + i;
    console.log('sum: ' + sum +', i: '+ i);
}
console.log('sum: ' + sum); 

fullName = ['홍길동','김민수','박이현','최성식']; // 자바스크립트 배열선언할때 []씀
var translateName = '';
for(let i=0; i<fullName.length; i++) {
    translateName += ' ' + fullName[i];
}
console.log(translateName)


for(let name of fullName) {
    translateName += ' ' + name;
}
console.log(translateName)

// object 타입
var person = {
    first_name: 'kildong',
    last_name: 'Hong',
    age: 15,
    phone: '010-1111-2222'
}
var field = 'phone'

person.first_name = '길동';
person['last_name'] = '홍';
person[field] = '010-1234-5678'

console.log('이름: ' + person.first_name);
console.log('나이: ' + person['age']);
console.log('연락처:' + person[field]);

document.write('<h2>홍길동의 정보</h2>');
document.write('<ul>');
document.write('<li>이름: '+ person.first_name + '</li>');
document.write('<li>나이: '+ person['age'] + '</li>');
document.write('<li>연락처: '+ person[field] + '</li>');
document.write('</ul>');


document.write('<button onclick="alert(person.first_name)">클릭</button>');
// alert => 알림창을 띄워준다.