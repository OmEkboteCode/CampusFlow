const mongoose = require("mongoose");
const initData = require("./data.js");
const Issue = require("../models/issue.js");

const MONGO_URL = `mongodb://127.0.0.1:27017/campusflow`;

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Issue.deleteMany({});
  await Issue.insertMany(initData.data);
  console.log("Data Was Initialized");
};


initDB();
