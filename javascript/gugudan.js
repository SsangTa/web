// gugudan.js
document.write('<table>');

/*
var num = 2;
for (let i = 1; i <= 9; i++) {
    document.write('<tr class="row">');
    document.write(`<td>${num}</td>
                    <td>X</td>
                    <td>${i}</td>
                    <td>=</td>
                    <td>${num*i}</td>`);
    document.write('</tr>');
}
document.write('</table>');
document.write('<br>');
*/

document.write('<table>');
document.write('</table>');


for (let No1 = 2; No1 <= 9; No1++) {
    document.write(`<div>`);
    document.write(`<h2>${No1}단</h2>`);
    for (let i = 1; i <= 9; i++) {
        document.write(`<p>${No1}X${i}=${No1*i}</p>`)
    }
    document.write(`</div>`);
}


/*
var num =2;
var num2 = 1;
for(let num =2; num<=9; num){
    for(let num2 =1; num2 <=9; num++){
        document.write(`<p>${num}X${num2}=${num*i}</p>`)
    }
}
*/

var start_nums = [2,3,4,5,6,7,8,9];
var end_nums = [1,2,3,4,5,6,7,8,9];

for (let num of start_nums) {
    document.write(`<div>`);
    document.write(`<h2>${num}단</h2>`);
    for(let num1 of end_nums) {
        document.write(`<p>${num}X${num1}=${num*num1}</p>`)
    }
    document.write(`</div>`);
}

