import React, { useState } from 'react';
import axios from 'axios';

const CarForm = ({ fetchCars }) => {
  const [car, setCar] = useState({
    make: '',
    model: '',
    year: '',
    insuranceExpiry: '',
    maintenanceDue: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/cars', car);
    fetchCars();
    setCar({ make: '', model: '', year: '', insuranceExpiry: '', maintenanceDue: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="make" placeholder="Make" value={car.make} onChange={handleChange} />
      <input name="model" placeholder="Model" value={car.model} onChange={handleChange} />
      <input name="year" placeholder="Year" value={car.year} onChange={handleChange} />
      <input name="insuranceExpiry" placeholder="Insurance Expiry" value={car.insuranceExpiry} onChange={handleChange} />
      <input name="maintenanceDue" placeholder="Maintenance Due" value={car.maintenanceDue} onChange={handleChange} />
      <button type="submit">Add Car</button>
    </form>
  );
};

export default CarForm;
