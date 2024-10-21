const nombrePersonas = [
 
];




function actualizarLista (){


    let html = '';
    let confirmados = 0;
    for (const personas of nombrePersonas){
        let check = '';
        if (personas.confirmado){
            check = 'checked';
            confirmados++;
        }
        html += `<div class="contenedor">
                
                <div class="nombreasistente">${personas.nombre}</div>
                <div class="cajita">
                 <input type="checkbox" ${check} onclick="confirmar(${personas.id});"/>  
                </div>
                <div clas="btn"><button onclick="eliminar()" type="button">x</button>
                </div>
                </div>`;
                
    }
    document.querySelector('#agregados').innerHTML = html
    document.querySelector('#total').innerHTML = confirmados;

}


const agregar = function (event){
    event.preventDefault();
    const input = document.querySelector('#nuevoInvitado');

    nombrePersonas.push({
        id: Date.now(),
        nombre:input.value,
        confirmado: false
    });
    
        actualizarLista ();
    nombrePersonas.splice()
}

const eliminar = function(id){
const eliminarcaja = nombrePersonas.findIndex((personas) => personas.id === id)    
    nombrePersonas.splice(eliminarcaja, 1)
    actualizarLista ();    
}

const confirmar = function(id){
    const caja = nombrePersonas.findIndex((personas) => personas.id === id)
    nombrePersonas[caja].confirmado = !nombrePersonas[caja].confirmado
    actualizarLista (); 
}
actualizarLista ();