//LocalStora datos persistentes, solo almacena en string
localStorage.setItem('nombre', 'Michael');

//almacenando objeto en storage
const producto = {
    'nombre': 'reloj',
    'precio': 149.990
}

// console.log(producto);
// console.log(typeof producto);

// transformar objeto en string
const productoString = JSON.stringify(producto);

// console.log(productoString);
// console.log( typeof productoString);

//almacenando
localStorage.setItem('producto', productoString);

// almacenar arreglos 

const meses = ['enero', 'febrero', 'marzo', 'abril'];

// const mesesString = JSON.stringify(meses);
// localStorage.setItem('meses', mesesString);

localStorage.setItem('meses', JSON.stringify(meses));








//sessionStorage datos que se eliminan al cerrar el navegador
// sessionStorage.setItem('apellido', 'Scott');



