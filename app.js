const prompt = require("prompt-sync")({ sigint: true });

let personas = [];

const solicitarDatos = () => {
  while (true) {
    let nombre = prompt("Ingrese nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    let dni = prompt("Ingrese su dni: ");
    let telefonos = [];

    while (true) {
      let telefono = prompt("Ingrese su telefono: ");
      telefonos.push(telefono);
      let continuar = prompt("¿Quiere agregar otro número de telefono? (s/n)").toLowerCase();
      if (continuar !== "s") break;
    }

    personas.push([nombre, apellido, dni, telefonos]);

    let continuar = prompt("¿Quiere agregar otra persona (s/n)").toLowerCase();
    if (continuar !== "s") break;
  }

  console.log("\n Listado de personas:");
  console.log(personas)

}

solicitarDatos();