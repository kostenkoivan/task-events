/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.innerHTML = 'Удали меня';
    button.addEventListener('click', () => button.remove());
    document.body.append(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');
    document.body.append(ul);
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = arr[i];
        li.addEventListener('mouseover', () =>
            li.setAttribute('title', arr[i]),
        );
        ul.append(li);
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
    a.innerHTML = 'tensor';
    a.setAttribute('href', 'https://tensor.ru/');
    a.addEventListener('click', function (event) {
        if (!event.target.textContent.includes('https://tensor.ru/')) {
            event.preventDefault();
            a.innerHTML += ' https://tensor.ru/';
        }
    });
    document.body.append(a);
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
    let ul = document.createElement('ul');
    document.body.append(ul);
    ul.addEventListener('click', (event) => {
        if (event.target && event.target.nodeName === 'LI') {
            event.target.innerHTML += '!';
        }
    });

    let li = document.createElement('li');
    li.innerHTML = 'Пункт';
    ul.append(li);

    let button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    document.body.append(button);
    button.addEventListener('click', () => {
        let li2 = document.createElement('li');
        li2.innerHTML = 'Пункт';
        ul.append(li2);
    });
}
