// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.


const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
];
const select = document.getElementById('type');
let arrayOption= [];
icons.forEach(element => {
  if(!arrayOption.includes(element.type)){
        arrayOption.push(element.type);
    }
       
});
arrayOption.unshift('all');
function listOption() {
    arrayOption.forEach(element => {
        const option= `<option value="${element}">${element}</option>`
        select.innerHTML+=option;
    });
}
listOption();

//per prima cosa andiamo a creare la funzione che permette di creare le card tutte uguali prendendo dall'array tutti i dati degli oggetti;
function CreateCard(arrayfiltered) {
    const row = document.querySelector('.row');
    row.innerHTML = '';
    arrayfiltered.forEach((value) => {
        const card = `        
        <div class="col-12 col-md-4 col-lg-3">
            <div class="card bg-light">
                <div style="color:${value.color}" class="card-body d-flex flex-column justify-content-center align-items-center fs-3 py-4 ">
                    <i class="${value.prefix}${value.family} ${value.prefix}${value.name}"></i>
                    <span>${value.name}</span>
                </div>
            
            </div>

        </div>`
        row.innerHTML += card
    });
}
CreateCard(icons);

const filterIcons = (selectedValue)=>{
    console.log(selectedValue);
    let filteredIcons;
    if(selectedValue === 'all'){
        filteredIcons = icons;
    }else{
        filteredIcons = icons.filter(element => element.type === selectedValue);
    }
   CreateCard(filteredIcons);
}

const handleChange = function typeSelector() {
    //recuperiamo l'oggetto select trasportato da this (che sarà un array di option);
    const selectObject = this;
    //recuperiamo l'index della option selezionata e il suo valore;
    const indexSelected= selectObject.selectedIndex;
    const selectedValue = selectObject.options[indexSelected].value;
    filterIcons(selectedValue);
}

select.addEventListener('change', handleChange);

