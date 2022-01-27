// calendar.js
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
document.write('<div class="container">');
// 요일 보여주는 부분

for (let day of days) {
    document.write(`<div class="days">${day}</div>`);
}
document.write('<br>');
var month = 4;
// 1일이 토요일 부터 시작
for (let i = 0; i < getMonthDay(month); i++) {
    document.write(`<div class="day">_</div>`);
}

// 날짜 보여주는 부분
for (let i = 1; i <= getLastDate(month); i++) {
    document.write(`<div class="day">${i}</div>`);
    if ((i + getMonthDay(month)) % 7 == 0) {
        document.write('<br>');
    }
}

document.write('</div>');