function orderByAscendente(){
    const url = 'http://localhost:3000/api/ascendente/'
    const contenedor = document.querySelector('tbody')
    let resultados = ''
    //funcion para mostrar los resultados de forma ascendente  
    const mostrar = (producto) => {
        producto.forEach(producto => {
            resultados += `<tr>
                                <td>${producto.idproducto}</td>
                                <td>${producto.categoria}</td>
                                <td>${producto.nombre}</td>
                                <td>${producto.estado}</td>
                                <td>${producto.precio}</td>
                                <td>${producto.precio_iva}</td>                            
                           </tr>
                        `    
        })
        contenedor.innerHTML = resultados   
    }
    
    fetch(url)
        .then( response => response.json() )
        .then( data => mostrar(data) )
        .catch( error => console.log(error))
     
    const on = (element, event, selector, handler) => {
        element.addEventListener(event, e => {
            if(e.target.closest(selector)){
                handler(e)
            }
        })
     }
    }


function orderByDescendente(){
        const url = 'http://localhost:3000/api/descendente/'
        const contenedor = document.querySelector('tbody')
        let resultados = ''
        //funcion para mostrar los resultados de forma ascendente  
        const mostrar = (producto) => {
            producto.forEach(producto => {
                resultados += `<tr>
                                    <td>${producto.idproducto}</td>
                                    <td>${producto.categoria}</td>
                                    <td>${producto.nombre}</td>
                                    <td>${producto.estado}</td>
                                    <td>${producto.precio}</td>
                                    <td>${producto.precio_iva}</td> 
                               </tr>
                            `    
            })
            contenedor.innerHTML = resultados   
        }
        
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrar(data) )
            .catch( error => console.log(error))
         
        const on = (element, event, selector, handler) => {
            element.addEventListener(event, e => {
                if(e.target.closest(selector)){
                    handler(e)
                }
            })
        }  
    }
    
function count(){
    const url = 'http://localhost:3000/api/count/'
    const contenedor = document.querySelector('tbody')
    let resultados = ''
    
    
        const mostrar = (producto) => {
            producto.forEach(producto => {
                resultados += `<tr>
                                    <td>${producto.contador}</td>
                                </tr>
                            `    
            })
            contenedor.innerHTML = resultados   
        }
        
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrar(data) )
            .catch( error => console.log(error))
         
        const on = (element, event, selector, handler) => {
            element.addEventListener(event, e => {
                if(e.target.closest(selector)){
                    handler(e)
                }
            })
         } 
    }

function max(){
        const url = 'http://localhost:3000/api/max/'
        const contenedor = document.querySelector('tbody')
        let resultados = ''
        
        
            const mostrar = (producto) => {
                producto.forEach(producto => {
                    resultados += `<tr>
                                        <td>${producto.maximo}</td>
                                    </tr>
                                `    
                })
                contenedor.innerHTML = resultados   
            }
            
            fetch(url)
                .then( response => response.json() )
                .then( data => mostrar(data) )
                .catch( error => console.log(error))
             
            const on = (element, event, selector, handler) => {
                element.addEventListener(event, e => {
                    if(e.target.closest(selector)){
                        handler(e)
                    }
                })
             } 
        }

function min(){
            const url = 'http://localhost:3000/api/min/'
            const contenedor = document.querySelector('tbody')
            let resultados = ''
            
            
                const mostrar = (producto) => {
                    producto.forEach(producto => {
                        resultados += `<tr>
                                            <td>${producto.minimo}</td>
                                        </tr>
                                    `    
                    })
                    contenedor.innerHTML = resultados   
                }
                
                fetch(url)
                    .then( response => response.json() )
                    .then( data => mostrar(data) )
                    .catch( error => console.log(error))
                 
                const on = (element, event, selector, handler) => {
                    element.addEventListener(event, e => {
                        if(e.target.closest(selector)){
                            handler(e)
                        }
                    })
                 } 
            }        

    
function innerJoin(){
        const url = 'http://localhost:3000/api/inner/'
        const contenedor = document.querySelector('tbody')
        let resultados = ''
        //funcion para mostrar los resultados de forma ascendente  
        const mostrar = (detalle) => {
            detalle.forEach(detalle => {
                resultados += `<tr>
                                    <td>${detalle.IdDetalle}</td>
                                    <td>${detalle.nombre}</td>
                                    <td>${detalle.descripcion}</td>
                                    <td>${detalle.estado}</td>
                               </tr>
                            `    
            })
            contenedor.innerHTML = resultados   
        }
        
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrar(data) )
            .catch( error => console.log(error))
         
        const on = (element, event, selector, handler) => {
            element.addEventListener(event, e => {
                if(e.target.closest(selector)){
                    handler(e)
                }
            })
        }  
    
    }


function suma(){
        const url = 'http://localhost:3000/api/sum/'
        const contenedor = document.querySelector('tbody')
        let resultados = ''
        
        
            const mostrar = (producto) => {
                producto.forEach(producto => {
                    resultados += `<tr>
                                        <td>${producto.suma}</td>
                                    </tr>
                                `    
                })
                contenedor.innerHTML = resultados   
            }
            
            fetch(url)
                .then( response => response.json() )
                .then( data => mostrar(data) )
                .catch( error => console.log(error))
             
            const on = (element, event, selector, handler) => {
                element.addEventListener(event, e => {
                    if(e.target.closest(selector)){
                        handler(e)
                    }
                })
             } 
        } 


function promedio(){
    
            const url = 'http://localhost:3000/api/avg/'
            const contenedor = document.querySelector('tbody')
            let resultados = ''
            
            
                const mostrar = (producto) => {
                    producto.forEach(producto => {
                        resultados += `<tr>
                                            <td>${producto.promedio}</td>
                                        </tr>
                                    `    
                    })
                    contenedor.innerHTML = resultados   
                }
                
                fetch(url)
                    .then( response => response.json() )
                    .then( data => mostrar(data) )
                    .catch( error => console.log(error))
                 
                const on = (element, event, selector, handler) => {
                    element.addEventListener(event, e => {
                        if(e.target.closest(selector)){
                            handler(e)
                        }
                    })
                 } 
            } 


function leftJoin(){
                const url = 'http://localhost:3000/api/leftjoin/'
                const contenedor = document.querySelector('tbody')
                let resultados = ''
                //funcion para mostrar los resultados de forma ascendente  
                const mostrar = (detalle) => {
                    detalle.forEach(detalle => {
                        resultados += `<tr>
                                            <td>${detalle.probando}</td>
                                            <td>${detalle.IdDetalle}</td>              
                                       </tr>
                                    `    
                    })
                    contenedor.innerHTML = resultados   
                }
                
                fetch(url)
                    .then( response => response.json() )
                    .then( data => mostrar(data) )
                    .catch( error => console.log(error))
                 
                const on = (element, event, selector, handler) => {
                    element.addEventListener(event, e => {
                        if(e.target.closest(selector)){
                            handler(e)
                        }
                    })
                }  
            
            }

            