let quotes = [
    'Это программист, я фотошоп.', 
    'Лучше быть последним-первым, чем первым-последним',
    'Легко вставать, когда ты не ложился',
    'За двумя зайцами погонишься — рыбку из пруда не выловишь, делу время, а отмеришь семь раз…',
    'Гонщики не гонят, гонщики гоняют но не загоняются',
    'Каждый думает, что не знает что, но не каждый не знает, что знает, кто не я …',
    'Когда меня рожали, собственно тогда я и родился',
];

const btn = document.querySelector('.button');

btn.addEventListener('click', doPhrase);

function doPhrase(event) {

    event.preventDefault()

    let index = Math.floor(Math.random() * quotes.length);

    let phrase = document.querySelector('#phrase');

    let quote = `<span id="phrase" class="container_text">${quotes[index]}</span>`;

    phrase.innerHTML = quote;
}