const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issuesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  location: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Open", "In Progress", "Resolved"],
    default: "Open",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
image: {
    filename: {
        type: String,
    },
    url: {
        type: String,
    },
  },
});

const Issue = mongoose.model("Issue", issuesSchema);

module.exports = Issue;
