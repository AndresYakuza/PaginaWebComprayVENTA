//Definición de variables
const url = 'http://localhost:3000/api/detalle/'
const contenedor = document.querySelector('tbody')
let resultados = ''

const modalDetalle = new bootstrap.Modal(document.getElementById('modalDetalle'))
const formDetalle = document.querySelector('form')
const IdProductod = document.getElementById('IdProductod')
const IdCliente = document.getElementById('IdCleinte')
const IdVendedor = document.getElementById('IdVendedor')
const Estado = document.getElementById('Estado')
const Fecha = document.getElementById('Fecha')
const Hora = document.getElementById('Hora')
const Descripcion = document.getElementById('Descripcion')
var opcion = ''

btnCrear.addEventListener('click', ()=>{
    IdProductod.value = ''
    IdCliente.value = ''
    IdVendedor.value = ''
    Estado.value = ''
    Fecha.value = ''
    Hora.value = ''
    Descripcion.value = ''
    modalDetalle.show()
    opcion = 'crear'
})

//funcion para mostrar los resultados
const mostrar = (detalle) => {
    detalle.forEach(detalle => {
        resultados += `<tr>
                            <td>${detalle.IdDetalle}</td>
                            <td>${detalle.IdProductod}</td>
                            <td>${detalle.IdCliente}</td>
                            <td>${detalle.IdVendedor}</td>
                            <td>${detalle.Estado}</td>
                            <td>${detalle.Fecha}</td>
                            <td>${detalle.Hora}</td>
                            <td>${detalle.Descripcion}</td>
                            <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                       </tr>
                    `    
    })
    contenedor.innerHTML = resultados
    
}

//Procedimiento Mostrar
fetch(url)
    .then( response => response.json() )
    .then( data => mostrar(data) )
    .catch( error => console.log(error))

  
const on = (element, event, selector, handler) => {
    //console.log(element)
    //console.log(event)
    //console.log(selector)
    //console.log(handler)
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

//Procedimiento Borrar
on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode
    const IdDetalle = fila.firstElementChild.innerHTML
    alertify.confirm("This is a confirm dialog.", 
    function  (){
        fetch(url+IdDetalle, {
            method: 'DELETE'
        })
        .then( res => res.json() )
        .then( ()=> location.reload())
        //alertify.success('Ok')
    },
    function(){
        alertify.error('Cancel')
    })
})

//Procedimiento Editar
let idForm = 0
on(document, 'click', '.btnEditar', e => {    
    const fila = e.target.parentNode.parentNode
    idForm = fila.children[0].innerHTML
    const IdProductodForm = fila.children[1].innerHTML
    const IdClienteForm = fila.children[2].innerHTML
    const IdVendedorForm = fila.children[3].innerHTML
    const EstadoForm = fila.children[4].innerHTML
    const FechaForm = fila.children[5].innerHTML
    const HoraForm = fila.children[6].innerHTML
    const DescripcionForm = fila.children[7].innerHTML
    IdProductod.value =  IdProductodForm
    IdCliente.value =  IdClienteForm
    IdVendedor.value =  IdVendedorForm
    Estado.value =  EstadoForm
    Fecha.value =  FechaForm
    Hora.value =  HoraForm
    Descripcion.value =  DescripcionForm
    opcion = 'editar'
    modalDetalle.show()
     
})

//Procedimiento para Crear y Editar
formDetalle.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(opcion=='crear'){        
        //console.log('OPCION CREAR')
        fetch(url, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                IdProductod:IdProductod.value,
                IdCliente:IdCliente.value,
                IdVendedor:IdVendedor.value,
                Estado:Estado.value,
                Fecha:Fecha.value,
                Hora:Hora.value,
                Descripcion:Descripcion.value
            })
        })
        .then( response => response.json() )
        .then( data => {
            const nuevoDetalle = []
            nuevoDetalle.push(data)
            mostrar(nuevoDetalle)
        })
    }
    if(opcion=='editar'){    
        //console.log('OPCION EDITAR')
        fetch(url+idForm,{
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                IdProductod:IdProductod.value,
                IdCliente:IdCliente.value,
                IdVendedor:IdVendedor.value,
                Estado:Estado.value,
                Fecha:Fecha.value,
                Hora:Hora.value,
                Descripcion:Descripcion.value
            })
        })
        .then( response => response.json() )
        .then( response => location.reload() )
    }
    modalDetalle.hide()
})

