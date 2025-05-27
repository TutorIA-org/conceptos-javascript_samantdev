function agruparAnagramas(palabras) {
  const mapa = new Map();

  for (const palabra of palabras) {
    // Ordenamos las letras de la palabra para crear la "clave del anagrama"
    const clave = palabra.split('').sort().join('');

    // Si la clave no existe en el mapa, la creamos
    if (!mapa.has(clave)) {
      mapa.set(clave, []);
    }

    // Añadimos la palabra al grupo correspondiente
    mapa.get(clave).push(palabra);
  }

  // Devolvemos los grupos como un arreglo
  return Array.from(mapa.values());
}