// dom3.js
// 변수는 값을 재할당 할수 있음
let n1 = 10;
n1 ='ten';

// 상수는 값을 재할당 불가
const n2 = 20;
// n2 =30;

function makeHead() {
    // title 갯수만큼 th생성하고 tr, thead 생성해서 반환
    const titles = ['이름', '나이', '성적', '삭제'];
    let thead = document.createElement('thead');
    // thead영역
    let tr = document.createElement('tr');
    for (let title of titles) {
        let th = document.createElement('th');
        let text = document.createTextNode(title);
        th.appendChild(text); // <th>이름</th>
        tr.appendChild(th); // <tr><th>이름</th></tr>
    }
    thead.appendChild(tr);
    return thead;
}

function makeBody(dataAry) {
    let tbody = document.createElement('tbody');

    // tbody영역
    dataAry.forEach(function (val, ind, ary) {
        let tr = makeRow(val);
        tbody.appendChild(tr);
    });
    return tbody;
}
// row 생성(tr생성하는 부분)
function makeRow(obj) {
    let tr = document.createElement('tr');
    for (let field in obj) {
        let td = document.createElement('td');
        let text = document.createTextNode(obj[field]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    //버튼추가
    let td = document.createElement('td');
    let btn = document.createElement('button');
    btn.innerText = '삭제';
    td.appendChild(btn);
    tr.appendChild(td);
    return tr;
}


const members = [
    {fname:'홍길동',age:20,score:80},
    {fname:'김만수',age:27,score:83},
    {fname:'최성식',age:31,score:77},
    {fname:'황인우',age:23,score:89},
]


let table = document.createElement('table');
table.setAttribute('border','1');
table.appendChild(makeHead());
table.appendChild(makeBody(members));

console.log(table); // <table><thead></thead><tbody></tbody></table>
document.getElementById('show').appendChild(table);

// 신규추가
// let newObj = {fname:'김익수',age:33,score:77}
// let newTr = makeRow(newObj);
// document.getElementsByTagName('tbody')[0].appendChild(newTr);

let btn = document.getElementById('btn');
btn.addEventListener('click',function() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let score = document.getElementById('score').value;

    let newObj = {fname:name,age:age,score:score}
    let newTr = makeRow(newObj);
    document.getElementsByTagName('tbody')[0].appendChild(newTr);

    // 값을 초기화
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('score').value = '';
    document.getElementById('name').focus();   // element에 포커스
});
