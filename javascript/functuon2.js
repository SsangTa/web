// functuoin2.js
function makeTr(ind, name) {
    var trTag = '<tr>';
    trTag += `<td>${ind+1}</td>`;
    trTag += `<td>${name}</td>`;
    trTag += `<td><button>삭제</button></td>`;
    trTag += `</tr>`;

    return trTag
}

var members = ["이효림", "장예빈", "윤희철", "이웅재"];


var str = '<table border="1">';
str += '<thead>';
str += '<tr><th>순번</th><th>이름</th><th>기능</th></tr>';
str += '<tbody>';
for (let i=0; i<members.length; i++) {
    str += makeTr(i, members[i]);   
}
str += '</tbody>';
str += '</table>';
document.write(str);