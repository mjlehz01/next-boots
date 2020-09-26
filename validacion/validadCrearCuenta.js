export default function validarCrearCuenta(valores) {
  let errores = {};

  //validar nombre del usuario

  if (!valores.nombre) {
    errores.nombre = "El Nombre es obligatorio";
  }

  //validar el email del usuario
  if (!valores.email) {
    errores.email = "El Email es obligatorio";
  } else if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = "Email no valido";
  }
  //validar la contraseña del usuario
  if (!valores.password) {
    errores.password = "La Contraseña es obligatorio";
  } else if (valores.password.length < 6) {
    errores.password = "La Contraseña debe ser minimo 6 Caracteres";
  }
  return errores;
}
