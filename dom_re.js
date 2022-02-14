// dom_re.js => Document Object Model
// Object {name: 'Hong', age: 20, fullname: function() {return this.name;}}
// 요소를 생성. createElement
// 요소를 선택. getElementById(), getElementByTagName(ClassName)
// 속성을 지정. setAttribute(), getAttribute()

// html페이지에 element, attribute, value 을 생성, 수정, 삭제.
// console.dir(document.getElementById('name'));
// console.log(document.getElementsByTagName('input'));

// var name = document.getElementsByTagName('input')[0].value;
// console.log(name);
// document.getElementsByTagName('input')[0].value = 'none';


// 사용되는 함수들...
function selectFnc() { // 선택버튼 클릭시 수정화면 보여주기.
    var selectedTr = this.parentNode.parentNode;
        // console.log(selectedTr);
        // console.log(selectedTr.querySelector('td:nth-child(1)').innerText);
        var sname = selectedTr.querySelector('td:nth-child(1)').innerText;
        var sage = selectedTr.querySelector('td:nth-child(2)').innerText;
        var sscore = selectedTr.querySelector('td:nth-child(3)').innerText;

        document.getElementById('name').value = sname;
        document.getElementById('age').value = sage;
        document.getElementById('score').value = sscore;
}

// 수정 버튼 콜백함수.
function modBtnFnc() {
    var keyName = document.querySelector('#name').value;
    var modTr = document.getElementById(keyName);

    var iAge = document.getElementById('age').value;
    var iScore = document.getElementById('score').value;

    if(iAge == '' || iScore == '' ) {
        alter('정상적인 값을 입력.')
        return;
    }

    modTr.childNodes[1].innerText = iAge;
    modTr.childNodes[2].innerText = iScore;
}


// 추가 버튼 콜백함수.
function addBtnFnc() {
    var name = document.getElementsByTagName('input')[0].value;  // Test
    var age = document.getElementsByTagName('input')[1].value;   // 20
    var score = document.getElementsByTagName('input')[2].value; //80

    if(name == '' || age == '' || score == '') {
        alert('필수값을 입력하세요.')
        return; // function의 종료.
    }
    var li = document.createElement('li');
    li.innerText = name + ' ' + age + ' ' + score;  // <li>none 20 80</li>

    document.getElementById('list').appendChild(li);

    // 입력된 값을 clear
    document.getElementsByTagName('input')[0].value = '';
    document.getElementsByTagName('input')[1].value = '';
    document.getElementsByTagName('input')[2].value = '';

}


// 추가 버튼 이벤트 헨들러.
document.getElementById('btn').addEventListener('click', addBtnFnc);


// 수정 버튼 헨들러.
document.querySelector('#mod').addEventListener('click', modBtnFnc);


const members = [
    {fname:'홍길동',age:20,score:80},
    {fname:'김만수',age:27,score:83},
    {fname:'최성식',age:31,score:77},
    {fname:'황인우',age:23,score:89},
]
let field = 'score';
console.log(members[0].fname);  //.연산자로 값을 불러올 수 있음
console.log(members[1]['age']); // 문자열로 가져올수 있음
console.log(members[2][field]); // field라는 변수 선언해두고 변수로 값을 불러올 수 있음

// 배열 => for.. of
// object => for .. in
for(let member of members) {
    for(let field in member) {
        console.log(member[field]);
    }
}


// <table><thead>이름,나이,점수</thead><tbody><tr>이름,나이,점수</tr></tbody></table>
var table = document.createElement('table');
table.setAttribute('border', '1');
table.setAttribute('id', 'tbl');
// table.setAttribute('class', 'main');
table.className = 'main';
var thead = document.createElement('thead');
table.appendChild(thead);

var titles = ['이름','나이','점수','삭제/선택'];
var tr = document.createElement('tr');
for(let title of titles) {
    var th = document.createElement('th');
    th.innerText = title;
    tr.appendChild(th);
}
thead.appendChild(tr);

// 바디영역 생성
var tbody = document.createElement('tbody');
for (let member of members) {
    // tr>td*3(이름, 나이, 점수)
    tr = document.createElement('tr');
    tr.setAttribute('id', member.fname);
    tbody.appendChild(tr);
    for(let field in member) {  // 이름,성적,나이
        var td = document.createElement('td');
        td.innerText = member[field];
        tr.appendChild(td);
    }
    td = document.createElement('td');
    var button = document.createElement('button');
    button.innerText = '삭제';
    button.addEventListener('click', function () {
        console.log(this.parentElement.parentElement);
        this.parentElement.parentElement.remove();
    })
    td.appendChild(button);

    button = document.createElement('button');
    button.innerText = '선택';
    button.addEventListener('click', selectFnc); 
    td.appendChild(button);
    
    tr.appendChild(td);
}
table.appendChild(tbody);


// show 하위 요소로 table 을 지정.
console.log(table); // <table></table>
document.getElementById('show').appendChild(table);