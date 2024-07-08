import React from 'react';
import axios from 'axios';

const CarItem = ({ car, fetchCars }) => {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/cars/${car._id}`);
    fetchCars();
  };

  return (
    <li>
      {car.make} {car.model} ({car.year}) - Insurance Expiry: {new Date(car.insuranceExpiry).toLocaleDateString()} - Maintenance Due: {new Date(car.maintenanceDue).toLocaleDateString()}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default CarItem;
