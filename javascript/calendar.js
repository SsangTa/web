// calendar.js
function getMonthDay(year, month) {
    var tMonth = month - 1;
    var today = new Date(year, tMonth, 1); // 현재 시점으로 Date 오브젝트.
    return today.getDay();
}

function getLastDate(year, month) {
    var lastDate = new Date(year, month, 0).getDate;
    return lastDate;
}

var year = 2020;
var month = 2;
document.write(`<h1>${year}년 ${month}월</h1>`);
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
document.write('<div class="container">');
// 요일 보여주는 부분

for (let day of days) {
    document.write(`<div class="days">${day}</div>`);
}
document.write('<br>');
// 1일이 토요일 부터 시작
for (let i = 0; i < getMonthDay(year, month); i++) {
    document.write(`<div class="day">_</div>`);
}

// 날짜 보여주는 부분
for (let i = 1; i <= getLastDate(year, month); i++) {
    document.write(`<div class="day">${i}</div>`);
    if ((i + getMonthDay(year, month)) % 7 == 0) {
        document.write('<br>');
    }
}

document.write('</div>');