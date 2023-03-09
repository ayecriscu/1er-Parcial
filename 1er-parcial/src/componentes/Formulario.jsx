import React, { useState } from 'react';
import Card from './Card';

const Formulario = () => {
  const [animalName, setAnimalName] = useState('');
  const [animalType, setAnimalType] = useState('');

  const handleAnimalNameChange = (event) => {
    setAnimalName(event.target.value);
  };

  const handleAnimalTypeChange = (event) => {
    setAnimalType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (animalName.trim().length < 3 || animalName.trim().charAt(0) === ' ' || animalType.trim().length < 6) {
      alert('Por favor chequea que la información sea correcta');
      return;
    }

    setAnimalName('');
    setAnimalType('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label  htmlFor="animalName">Nombre del animal:</label>
      <input  className='InpuntStyles' type="text" id="animalName" value={animalName} onChange={handleAnimalNameChange} />

      <label htmlFor="animalType">Tipo de animal:</label>
      <input className='InpuntStyles' type="text" id="animalType" value={animalType} onChange={handleAnimalTypeChange} />
        <br></br>

      <button type="submit">Enviar</button>

      {animalName && animalType && (
        <Card animalName={animalName} animalType={animalType} />
      )}
    </form>
  );
};

export default Formulario;