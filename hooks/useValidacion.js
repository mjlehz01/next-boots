import React, { useState, useEffect } from "react";

const useValidacion = (stateInicial, validar, funcion) => {
  const [valores, setValores] = useState(stateInicial);
  const [errores, setErrores] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0;

      if (noErrores) {
        funcion(); // función que se ejecuta en el componente
      }
      setSubmitForm(false);
    }
  }, [errores]);

  //funcion que se ejecuta conforme en usuario escribre
  const handleChange = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  //funcion que se ejecuta cuando el usuario hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    setErrores(erroresValidacion);
    setSubmitForm(true);
  };

  //cuando se realiza el evento de blur
  const handleBlur = () => {
    const erroresValidacion = validar(valores);
    setErrores(erroresValidacion);
  };

  return {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  };
};

export default useValidacion;
