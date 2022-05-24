// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let createUl = document.createElement('ul');

countries.forEach(country => {
    let createLi = document.createElement('li');
    createLi.appendChild(document.createTextNode(country));
    createUl.appendChild(createLi);
});

document.body.appendChild(createUl);
console.log(createUl);


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let removedClass = document.querySelector('.fn-remove-me');

document.body.removeChild(removedClass);


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let createUl2 = document.createElement('ul');

cars.forEach(car => {
    let createLi2 = document.createElement('li');
    createLi2.textContent = car;
    createUl2.appendChild(createLi2);
})

let printHere = document.querySelector('div[data-function = "printHere"]');

printHere.appendChild(createUl2);

console.log(printHere);


// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const iterator of countries2) {
    let divS = document.createElement('div');
    divS.classList.add('list');

    let title2 = document.createElement('h4');
    title2.innerText = iterator.title;
    divS.appendChild(title2);

    let image = document.createElement('img');
    image.src = iterator.imgUrl;
    divS.appendChild(image);

    document.body.appendChild(divS);

    console.log(divS);
}


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

const deleteLast = () => {
    const deleteDiv = document.querySelectorAll('div');
    const lastDiv = deleteDiv.length - 1;

    document.body.removeChild(deleteDiv[lastDiv]);
}

document.querySelector('#borrarLastDiv').addEventListener("click", deleteLast);


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

// const divsCreados = document.getElementsByClassName('list');
// const divsCreadosArray = Array.from(divsCreados);

// for (let i = 0; i < divsCreadosArray.length; i++) {
//     let newButton = document.createElement('button');
//     newButton.removeChild(divsCreadosArray);
// }



