const mongoose = require('mongoose');

const offhoursSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  offHours: {
    type: [String],
    required: true,
  },
});

const offhours = mongoose.model('offhours', offhoursSchema);

module.exports = offhours;
