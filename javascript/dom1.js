// dom1.js

console.log(document);
        let show = document.getElementById('show');
        console.log(show);
        let head = show.getElementsByTagName('h3');
        console.log(head);

        let pTag = document.createElement('p');  //<p>Hello, World</p>
        pTag.setAttribute('id','hello');
        pTag.setAttribute('class','world');
        let text = document.createTextNode('Hello, World');
        pTag.appendChild(text);
        console.log(pTag);
        show.appendChild(pTag);
        document.body.appendChild(pTag);

        // 이름 <li>이홍제</li>
        // id="list" 하위에 appendChild()

        let liTag = document.createElement('li');
        let textN = document.createTextNode('이홍제');
        liTag.appendChild(textN); //부모자식 관계 형성

        // list의 하위 요소를 추가
        document.getElementById('list').appendChild(liTag);

        let list = document.getElementById('list');
        console.log(list.childNodes);
        list.childNodes[1].remove();

        list.childNodes