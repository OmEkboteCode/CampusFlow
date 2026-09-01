const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const Issue = require("./models/issue.js")
const methodOverride = require("method-override");

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("Working");
});

app.get("/testissue", async (req, res) => {
  let sampleIssue = new Issue({
    title: "Projector not turning on",
    description:
      "The projector in Seminar Hall 2 does not power on even though the power supply appears to be working.",
    category: "Equipment",
    location: "Seminar Hall 2",
    status: "In Progress",
    createdAt: new Date("2026-08-24T14:30:00"),
    image: {
      filename: "seminar-projector",
      url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
    },
  });
  await sampleIssue.save();
  console.log("Sample Was Saved");
  res.send("Successful Testing");
});

//Index Route

app.get("/issues", async (req, res) => {
    const allIssues = await Issue.find({});
  res.render("issues/index.ejs", { allIssues });
});

app.listen(3000, () => {
  console.log("Server is listening to 3000");
});
