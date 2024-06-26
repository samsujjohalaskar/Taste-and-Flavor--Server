const mongoose = require("mongoose");

const ISTOffset = 330 * 60000;

const bookingSchema = new mongoose.Schema({
  bookedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  numberOfPeople: {
    type: Number,
  },
  bookingDate: {
    type: String,
  },
  entryTime: {
    type: String
  },
  specialRequest: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled","Fulfilled","Unattended"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: () => new Date(Date.now() + ISTOffset),
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
