// function3.js

let member1 = {
    meb_id: 1001,
    first_name: '준우',
    last_name: '조',
    math_score: 80,
    eng_score: 90
}
let member2 = {
    meb_id: 1002,
    first_name: '홍제',
    last_name: '이',
    math_score: 82,
    eng_score: 88
}
let member3 = {
    meb_id: 1003,
    first_name: '이경',
    last_name: '박',
    math_score: 85,
    eng_score: 89
}

let members = [member1, member2, member3];

// 내가 만든 반복문
// function makeTr(member) {
//     // meb_id , first_name, last_name, math_score, eng_score
//     var trTag = '<tr>';
//     trTag += `<td>${members[0].meb_id}</td>`;
//     trTag += `<td>${members[0].first_name}</td>`;
//     trTag += `<td>${'[last_name]'}</td>`;
//     trTag += `<td>${'[math_score]'}</td>`;
//     trTag += `<td>${'[eng_score]'}</td>`;
//     trTag += `</tr>`;

//     return trTag;
// }

// var str = '<table border="1">';
// str += '<thead>';
// str += '<tr><th>학번</th><th>first_name</th><th>last_name</th><th>수학</th><th>영어</th></tr>';
// str += '<tbody>';
// for (let member of members) {
//     console.log(member, member['first_name'], member.last_name, member.math_score, member.eng_score)
//     document.write('<tr>');
//     document.write(`<td>${member['meb_id']}</td><td>${member['first_name']}</td><td>${member['last_name']}</td><td>${member['math_score']}</td><td>${member['eng_score']}</td>`);
//     document.write('</tr>');
// }
// document.write('</tbody>');
// document.write('</table>');
// document.write(str);


// 교수님 답안
function makeTr(member) {
    // meb_id , first_name, last_name, math_score, eng_score
    var trTag = '<tr>';
    trTag += `<td>${member.meb_id}</td>`;
    trTag += `<td>${member.last_name}${member.first_name}</td>`;
    trTag += `<td>${member.math_score}</td>`;
    trTag += `<td>${member.eng_score}</td>`;
    trTag += `<td><button>삭제</button></td>`;
    return trTag;

}

var str = '<table border="1">';
str += '<thead>';
str += '<tr><th>학번</th><th>이름</th><th>수학</th><th>영어</th><th>기능</th></tr>';
str += '<tbody>';
for (let i=0; i<members.length; i++) {
    str += makeTr(members[i]);   
}
str += '</tbody>';
str += '</table>';
document.write(str);