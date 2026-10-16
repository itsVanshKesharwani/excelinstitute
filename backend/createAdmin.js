const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const Admin = require("./models/Admin");

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  const exists = await Admin.findOne({ username: process.env.ADMIN_USER });
  if (exists) {
    console.log("Admin already exists");
  } else {
    const hash = await bcrypt.hash(process.env.ADMIN_PASS, 10);
    await Admin.create({ username: process.env.ADMIN_USER, password: hash });
    console.log("Admin created");
  }
  process.exit();
}
run();
