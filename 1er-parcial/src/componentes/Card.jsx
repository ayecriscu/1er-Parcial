import React from 'react';

const Card = ({ animalName, animalType }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre del animal</th>
          <th>Tipo de animal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{animalName}</td>
          <td>{animalType}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Card;
