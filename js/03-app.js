//eliminar elementos de localstorage

localStorage.removeItem('nombre');

// actualizar un registro

const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);

//agregar nuevo mes
mesesArray.push('abril');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));


//limpiar local storage
localStorage.clear();