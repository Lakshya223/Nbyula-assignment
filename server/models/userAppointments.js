const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  agenda: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  guest: {
    type: String,
    required: true,
  },
});

const userAppointmentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  appointments: {
    type: [appointmentSchema],
    default: [],
  },
});

const userAppointments = mongoose.model('userAppointments', userAppointmentsSchema);

module.exports = userAppointments;
