//ingresar productos a Array
//funcion en objeto TransformStreamDefaultControlle
//en carrito los 4 
//al cerrar mostrar
//subtota sin iva

//en objeto solo llamar la funcion para calculo, dentro del mismo objeto
//solo agregar
//iva 16%
let carProductos = []
let carrito = {
    productos: [],
    Folio: Math.random().toString(36).slice(2),
    Subtotal: sub = (productos) =>{
        console.log(productos)
         let sub = 0
        productos.forEach(function(el, ind){
            sub += el.precio
         });
        //let sub = productos.reduce((a,b) =>  a+b)
        console.log(sub)
        return sub
    },
    Total: tot = (Subtotal) => {
        let iva = 0.16
        let tot = Subtotal
        tot = (tot - (tot*iva)) + tot
        return tot
    }
}

let producto = {nombre: "",precio:0,cantidad:0,calcularPrecio: precio = (precio,cantidad)=>{
    return precio*cantidad
}}


const agregar = () =>{
    producto.nombre = $('#nomProducto').val()
    producto.precio = $('#precioProducto').val()
    producto.cantidad = $('#cantProducto').val()
    
    carrito.productos.push(producto)
    console.log(carrito.productos)
    carProductos = carrito.productos

    producto = {nombre: "",precio:0,cantidad:0,calcularPrecio: precio = (precio,cantidad)=>{
        return precio*cantidad
    }}
    
    //carrito.Subtotal(carrito.productos)
    //carrito.Total(carrito.productos,carrito.Subtotal())
    console.log(carrito)
}

const mostrar = () =>{
    console.log(carrito)
    $('#subtotal').html("$ " + carrito.Subtotal(carrito.productos))
    $('#total').html("$ " + carrito.Total(carrito.Subtotal(carrito.productos)))
}

