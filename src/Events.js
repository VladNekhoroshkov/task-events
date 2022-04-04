/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    let text = document.createTextNode('Удали меня');
    button.appendChild(text);
    document.body.append(button);
    button.addEventListener('click', () => {
        document.querySelector('button').remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/

export function createArrList(arr) {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = arr[i];
        li.addEventListener('mouseover', function (event) {
            event.target.setAttribute('title', event.target.innerHTML);
        });
        ul.appendChild(li);
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/

export function createLink() {
    const a = document.createElement('a');
    a.setAttribute('href', 'https://tensor.ru/');
    a.innerHTML = 'tensor';
    document.body.appendChild(a);

    a.addEventListener(
        'click',
        function (event) {
            let elm = document.querySelector('a');
            elm.textContent += ` ${elm.href}`;
            event.preventDefault();
        },
        { once: true },
    );
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/

export function createList() {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);

    const li = document.createElement('li');
    li.innerHTML = 'Пункт';
    ul.appendChild(li);

    const button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    document.body.appendChild(button);

    const addSign = function (e) {
        if (e.target && e.target.nodeName === 'LI') {
            e.target.textContent += '!';
        }
    };
    document.querySelector('li').addEventListener('click', addSign);

    button.addEventListener('click', function (event) {
        const li = document.createElement('li');
        li.innerHTML = 'Пункт';
        li.addEventListener('click', addSign);
        ul.appendChild(li);
    });
}
