export default function validarCrearProducto(valores) {
  let errores = {};

  //validar nombre del usuario

  if (!valores.nombre) {
    errores.nombre = "El Nombre es obligatorio";
  }

  //validar empresa
  if (!valores.empresa) {
    errores.empresa = "El nombre de la empresa el obligatorio";
  }

  //validar la url
  if (!valores.url) {
    errores.url = "Se Requiere Una Url";
  } else if (!/^(ftp|http|https):\/\/[^"]+$/.test(valores.url)) {
    errores.url = "URL con formato incorecto o no valida";
  }

  //validar descripcion
  if (!valores.descripcion) {
    errores.descripcion = "Agrega Una Descripcion de tu producto";
  }
  return errores;
}
