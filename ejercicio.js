function agruparAnagramas(palabras) {
  var mapa = {}; // Uso de var en lugar de let/const

  for (let i = 0; i < palabras.length; i++) {
    let clave = palabras[i].split("").sort().join("");

    if (!mapa[clave]) {
      mapa[clave] = [];
    }

    mapa[clave].push(palabras[i]);
  }

  // Recorremos todas las claves manualmente (innecesario)
  let resultado = [];
  for (let k in mapa) {
    if (mapa.hasOwnProperty(k)) {
      resultado.push(mapa[k]);
    }
  }

  return resultado;
}