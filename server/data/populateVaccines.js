const mongoose = require("mongoose");
const fs = require("fs");
const Vaccine = require("../models/vaccineModel");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB!"))
  .catch((err) => console.log("There was an error: ", err));

async function populateVaccines() {
  try {
    const data = fs.readFileSync("./vaccines.json", "utf-8");
    const vaccinesData = JSON.parse(data);
    await Vaccine.insertMany(vaccinesData);
    console.log("Inserted data successfully");
  } catch (err) {
    console.log("Error inserting data: ", err);
  } finally {
    mongoose.connection.close();
  }
}

populateVaccines();
