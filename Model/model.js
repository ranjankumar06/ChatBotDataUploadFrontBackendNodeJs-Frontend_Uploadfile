const mongoose = require("mongoose");

const photoVideoSchema = new mongoose.Schema(
  {
    photoVideo: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("PhotoOrVideo", photoVideoSchema);
