personas = []

def solicitarDatos():
  while(True):
    nombre = input("Ingrese su nombre: ")
    apellido = input("Ingrese su apellido: ")
    dni = input("Ingrese su dni: ")
    telefonos = []

    while(True):
      telefono = input("Ingrese su télefono: ")
      telefonos.append(telefono)

      continuar = input("¿Quiere agregar otro número de télefono? (s/n)").lower()
      if (continuar != "s"):
        break

    personas.append([nombre, apellido, dni, telefonos])

    continuar = input("¿Quiere agregar otra persona? (s/n)").lower()
    if (continuar != "s"):
      break

  print("\n Listado de personas:")
  print(personas)


solicitarDatos()