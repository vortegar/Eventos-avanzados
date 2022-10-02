
//Creo la etiqueta span
const _span = document.createElement('span');
_span.innerHTML = ' Tematica elegida: Lego';
_span.id = 'nuevo-span';

//Creo las constantes 
const _h1 = document.querySelector('h1');
const _check = document.querySelector('#modo-superpuesto')
const _div = document.querySelector('div')



_h1.appendChild(_span);

// array de colores
let _colores = ['red', 'yellow', 'black', 'gray'];

//Selecciono el select del HTML
let _select = document.querySelector('#select-colors');

//Creo constante que contiene el primer elemento de mi select.
const _Option0 = document.createElement("Option");

_Option0.value = "Elige un color";
_Option0.disabled = true;
_Option0.selected = true;
_Option0.innerHTML = "Elige un color";
_select.appendChild(_Option0);


//Creo un array vacio y le asigno los colores
const _Options = [];

function AddColores() {
for (let i = 1; i <=_colores.length; i++){
    _Options[i] = document.createElement('option');
    _Options[i].value = _colores [i - 1];
    _Options[i].innerHTML = _colores [i - 1];
    _select.appendChild(_Options[i]);
}
}



let _TodosLosCirculos = document.querySelectorAll('button');


_TodosLosCirculos.forEach(items => {
    items.addEventListener('click', (e) => {

        if(_check.checked){
            if(items.id ==='circulo-1')
            {_TodosLosCirculos[0].style.backgroundColor = `${_select.value}`;}

            else if(items.id ==='circulo-2')
                {for (let i = 1; i >= 0 ; i--){
                _TodosLosCirculos[i].style.backgroundColor = `${_select.value}`};}

            else if(items.id ==='circulo-3')
            {for (let i = 2; i >= 0 ; i--){
            _TodosLosCirculos[i].style.backgroundColor = `${_select.value}`};}

            else if(items.id ==='circulo-4')
            {for (let i = 3; i >= 0 ; i--){
            _TodosLosCirculos[i].style.backgroundColor = `${_select.value}`};}
            localStorage.setItem("check", "checked");
            localStorage.setItem("colorF", `${_select.value}`);
            return;
        }
        else{
            if(items.id ==='circulo-1')
            {_TodosLosCirculos[0].style.backgroundColor = `${_select.value}`;
            localStorage.setItem("colorCiculo-1",`${_select.value}`);}

            else if(items.id ==='circulo-2')
            {_TodosLosCirculos[1].style.backgroundColor = `${_select.value}`;
            localStorage.setItem("colorCiculo-2",`${_select.value}`);}

            else if(items.id ==='circulo-3')
            {_TodosLosCirculos[2].style.backgroundColor = `${_select.value}`;
            localStorage.setItem("colorCiculo-3",`${_select.value}`);}

            else if(items.id ==='circulo-4')
            {_TodosLosCirculos[3].style.backgroundColor = `${_select.value}`;
            localStorage.setItem("colorCirculo_4", `${_select.value}`)
        };}
        localStorage.setItem("check", "Notchecked")
    })
})


// defino boton reset
_TodosLosCirculos[4].addEventListener('click', () => {
    for (let i = 3; i >= 0 ; i--){
        _TodosLosCirculos[i].style.backgroundColor = 'white'}});

//defino boton agregar circulos
let NuevoCirculo

_TodosLosCirculos[5].addEventListener('click', (e) => {


    if (!document.querySelector('#circulo-5')){
    const NuevoCirculo = document.createElement('button');

    NuevoCirculo.id = 'circulo-5'
    NuevoCirculo.classList.add('circulos')
    NuevoCirculo.style.backgroundColor = _select.value
    _div.appendChild(NuevoCirculo);}
})

//Resize de la pagina
function Resize(){
    if(window.innerWidth <= 500){
        _TodosLosCirculos.forEach((item) =>{
            item.disabled = true})
        _check.disabled = true;
        _TodosLosCirculos[4].disabled = true;
    }else{
        _TodosLosCirculos.forEach((item) =>{
            item.disabled = false;
        })
        _check.disabled =false;
        _TodosLosCirculos[4].disabled = false;
    }
}


window.addEventListener('resize', (e) => {
    Resize()
})


if(confirm
    ("¿Desea crear una lista de colores propia?" + " " + "Nota los valores predeterminados son" + " " + _colores)){
    _colores = []
    let _NumeroDeColores = parseInt (
        prompt("Escribe cuantos colores quieres que tenga la lista")
    );
    let i = 1;
    while (i <= _NumeroDeColores){
        let _ColorAdd = prompt ("Introduzca el nombre del color que quiere agregar, NOTA: El nombre del color debe estar escrito en ingles")
        _colores.push(_ColorAdd);
        i++;
        console.log(_colores);
    }
    AddColores();
}else {
    if(confirm("¿Desea agregar o quitar colores a los predeterminados?")){
        if(confirm("¿Desea agregar colores a los predeterminados?" + " " + _colores)){
            let _ColorAdd = prompt ("Escriba el color que desea agregar en la lista");
            _colores.push(`${_ColorAdd.toLowerCase()}`);
            AddColores();
        }
        else {
            parseInt(prompt("Escriba el número de colores que desea eliminar de los valores predeterminados, Nota Recuerden que son solo 3 colores" + " " + _colores)
            );
            let i = 0;
            while (i <= 1){
            _colores.pop()
            i++}
            AddColores();

        }
    }
    else{AddColores();}
}
(() => {
    let color = localStorage.getItem("colorF");
    let checkL = localStorage.getItem("check");

    if(checkL === "checked") {
        localStorage.removeItem("colorCiculo-1")
        localStorage.removeItem("colorCiculo-2")
        localStorage.removeItem("colorCiculo-3")
        localStorage.removeItem("colorCiculo-4")
        for (let i = 0; i <= 3; i++){
            _TodosLosCirculos[i].style.backgroundColor = color;}
    }else{
        localStorage.removeItem("colorF")
        let Color_1 = localStorage.getItem("colorCiculo-1")
            _TodosLosCirculos[0].style.backgroundColor = Color_1;     
        let Color_2 = localStorage.getItem("colorCiculo-1")
            _TodosLosCirculos[1].style.backgroundColor = Color_2;
        let Color_3 = localStorage.getItem("colorCiculo-1")
            _TodosLosCirculos[2].style.backgroundColor = Color_3;
        let Color_4 = localStorage.getItem("colorCiculo-1")
            _TodosLosCirculos[3].style.backgroundColor = Color_4;
    }
})();

