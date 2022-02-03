// dom2.js

let title = document.getElementsByTagName('title');
        console.log(title);
        document.addEventListener('DOMContentLoaded', function () {
            
            let show = document.getElementById('show');
            console.log(show);

            let text = `텍스트 파일로 만들어져 있는 웹 문서를 브라우저에 렌더링하려면 웹 문서를 브라우저가 이해할 수 있는 구조로 메모리에 올려야 한다. 브라우저의 렌더링 엔진은 웹 문서를 로드한 후, 파싱하여 웹 문서를 브라우저가 이해할 수 있는 구조로 구성하여 메모리에 적재하는데 이를 DOM이라 한다. 즉 모든 요소와 요소의 어트리뷰트, 텍스트를 각각의 객체로 만들고 이들 객체를 부자 관계를 표현할 수 있는 트리 구조로 구성한 것이 DOM이다. 이 DOM은 자바스크립트를 통해 동적으로 변경할 수 있으며 변경된 DOM은 렌더링에 반영된다.`;
            let strAry = text.split(' ');
            console.log(strAry);
            let list = document.getElementById('list');
            strAry.forEach(function(val, ind) {
                let li = document.createElement('li');
                let textN = document.createTextNode(val);
                li.appendChild(textN);

                list.appendChild(li);
            });

            let listElems = document.getElementsByTagName('li');
            console.log(listElems);
            let newStrAry = [];
            for(let item of listElems) {
                console.log(item.innerText);
                newStrAry.push(item.innerText);
            }
            console.log(newStrAry);
        })