import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

export const SearchForm = () => {
  const [postalCode, setPostalCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (postalCode.length === 0) {
      setErrorMessage("Se debe introducir un código postal");
    } else if (postalCode.length !== 5) {
      setErrorMessage("El código postal debe tener 5 dígitos");
    } else if (isNaN(postalCode)) {
      setErrorMessage("El código postal debe ser numérico");
    } else {
      setErrorMessage("");
      navigate("/search/" + postalCode);
    }
  };

  const handleChange = (event) => {
    setPostalCode(event.target.value);
  };

  return (
    <div className="container-searchform">
      <form className="formulario" onSubmit={handleSubmit}>
        <input type="text" placeholder="Introduce un código postal..." onChange={handleChange} value={postalCode} />
        <button type="submit">Buscar</button>
      </form>
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};
