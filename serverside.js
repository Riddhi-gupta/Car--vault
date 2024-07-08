const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/carVault', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  insuranceExpiry: Date,
  maintenanceDue: Date,
});

const Car = mongoose.model('Car', carSchema);

// Routes
app.get('/cars', async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
});

app.post('/cars', async (req, res) => {
  const newCar = new Car(req.body);
  await newCar.save();
  res.json(newCar);
});

app.put('/cars/:id', async (req, res) => {
  const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedCar);
});

app.delete('/cars/:id', async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ message: 'Car deleted' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
