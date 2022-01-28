// object.js

var member1 = {
    first_name: 'Kildong',
    last_name: 'Hong',
    age: 20,
    score: 80,
    fullName: function () {
        return this.last_name + ' ' + this.first_name;
    },
    isAdult: function() {
        return this.age >= 20 ? true : false;
    }
}

console.log(member1.first_name);
console.log(member1.fullName());


if(member1.isAdult()) {
    console.log(`${member1.fullName()} 는 성인입니다.`);
} else {
    console.log(`${member1.fullName()} 는 미성년입니다.`);

}





// 예제2
console.log( document.getElementById('hobby').value);
// document.getElementById('hobby').value = 'climbing';

document.getElementById('add').addEventListener('click', function() {
    console.log( document.getElementById('hobby').value);
    var userInputVal = document.getElementById('hobby').value
    // document.write(`<h3${userInputVal}</h3>`)
    var tag = `<h3${userInputVal}</h3>`;
});