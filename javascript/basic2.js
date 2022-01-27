var str = 'hello';
var age = 50;
// I'm 29;
str = "I'm " + age + "\n My name is hhh"; // => \n 은 줄바꿈 선언
str = `I'm ${age} 
 My name is hhh`; // `` => 는 줄바꿈 따로 선언없이 쓸 수 있음
 console.log(str);
//  "", '', `` => 문자열

var members = ["이효림","장예빈","윤희철","이웅재"];

var tag = `<ul>`;
for(let member of members) {
    tag += `<li>이름은 ${member} 입니다.<li>`;
}
tag += `</ul>`;
document.write(tag);