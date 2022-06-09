//recuperar datos de local storage

const mesesGuardados = localStorage.getItem('meses');
console.log(typeof mesesGuardados);
console.log(mesesGuardados);

//transofrmar string a objeto/arreglo

const mesesParse = JSON.parse(mesesGuardados);
console.log(typeof mesesParse);
console.log( mesesParse);