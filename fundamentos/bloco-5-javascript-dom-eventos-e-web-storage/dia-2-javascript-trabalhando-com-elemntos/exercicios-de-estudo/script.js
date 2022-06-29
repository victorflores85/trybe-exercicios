// arquivo script.js

//Parte I
    // 1. Acesse o elemento elementoOndeVoceEsta.
    const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

    // 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
    const pai = elementoOndeVoceEsta.parentElement;
    pai.style.color = 'green';

    // 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
    // Você se lembra dos vídeos da aula anterior, como fazer isso?
    const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
    primeiroFilhoDoFilho.innerText = 'Primeiro Filho do Filho!';

    // 4. Acesse o primeiroFilho a partir de pai.
    const primeiroFilho = pai.firstElementChild;

    // 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
    const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
    
    // 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
    const textElement = elementoOndeVoceEsta.nextSibling;

    // 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
    const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

    // 8. Agora acesse o terceiroFilho a partir de pai.
    const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

//Parte II
    // 1. Crie um irmão para `elementoOndeVoceEsta`.
    const irmaoElementoOndeVoceEsta = document.createElement('section');
    irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
    pai.appendChild(irmaoElementoOndeVoceEsta);

    // 2. Crie um filho para `elementoOndeVoceEsta`.
    const FilhoElementoOndeVoceEsta = document.createElement('section');
    FilhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
    elementoOndeVoceEsta.appendChild(FilhoElementoOndeVoceEsta);

    // 3. Crie um filho para `primeiroFilhoDoFilho`.
    const filhoPrimeiroFilhodoFilho = document.createElement('section');
    filhoPrimeiroFilhodoFilho.id = 'filhoPrimeiroFilhodoFilho';
    primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhodoFilho);

    // 4. A partir desse filho criado, acesse `terceiroFilho`.
    document.getElementById('filhoPrimeiroFilhodoFilho').parentElement.parentElement.nextElementSibling;

//Parte III
    //1. Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
    

