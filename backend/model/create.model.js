const mongoose = require('mongoose');

const HackathonSchema = new mongoose.Schema({
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  organizer: String,
  userId: String,
});

module.exports = mongoose.model('Hackathon', HackathonSchema);
