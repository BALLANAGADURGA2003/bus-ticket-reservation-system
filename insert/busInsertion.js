const BusDetails = require('../models/busDetails');

const predefinedBusDetails = [
  {
    name: 'Morning Star',
    fromStation: 'Machilipatnam',
    toStation: 'Hyderabad',
    departureDate: new Date('2024-04-25'),
    departureTime: '08:00 AM',
    arrivalTime: '04:00 PM',
    price: 900
  },
  {
    name: 'Eswar Travels',
    fromStation: 'Machilipatnam',
    toStation: 'Hyderabad',
    departureDate: new Date('2024-04-25'),
    departureTime: '09:00 AM',
    arrivalTime: '3:00 PM',
    price: 600
  },
  {
    name: 'Dasari Travels',
    fromStation: 'Machilipatnam',
    toStation: 'Hyderabad',
    departureDate: new Date('2024-04-25'),
    departureTime: '10:00 AM',
    arrivalTime: '6:00 PM',
    price: 800
  }
];

async function insertBusDetails() {
  try {
    await BusDetails.insertMany(predefinedBusDetails);
    console.log('Predefined bus details inserted successfully');
  } catch (error) {
    console.error('Error inserting predefined bus details:', error);
  }
}

module.exports = insertBusDetails;
