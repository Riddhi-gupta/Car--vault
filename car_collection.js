import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarItem from './CarItem';
import CarForm from './CarForm';

const CarCollection = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    const response = await axios.get('http://localhost:5000/cars');
    setCars(response.data);
  };

  return (
    <div>
      <h1>Car Vault</h1>
      <CarForm fetchCars={fetchCars} />
      <ul>
        {cars.map((car) => (
          <CarItem key={car._id} car={car} fetchCars={fetchCars} />
        ))}
      </ul>
    </div>
  );
};

export default CarList;
