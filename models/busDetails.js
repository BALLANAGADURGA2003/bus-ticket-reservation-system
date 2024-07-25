const mongoose = require('mongoose');

const busDetailsSchema = new mongoose.Schema({
  name: String,
  fromStation: String,
  toStation: String,
  departureDate: Date,
  departureTime: String,
  arrivalTime: String,
  price: Number
});

const BusDetails = mongoose.model('BusDetails', busDetailsSchema);

module.exports = BusDetails;
