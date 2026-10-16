const router = require("express").Router();
const Student = require("../models/Student");
const { userAuth } = require("../middleware/auth");

// logged in student submits admission form
router.post("/", userAuth, async (req, res) => {
  try {
    const { name, fatherName, phone, email, classApplied, address } = req.body;

    if (!name || !fatherName || !phone || !classApplied) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return res.status(400).json({ message: "Enter a valid 10 digit phone number" });
    }

    const already = await Student.findOne({
      user: req.user.id,
      name,
      classApplied,
    });
    if (already) {
      return res.status(400).json({ message: "You already applied for this class" });
    }

    await Student.create({
      user: req.user.id,
      name, fatherName, phone, email, classApplied, address,
    });
    res.status(201).json({ message: "Admission form submitted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// student sees only his own applications and their status
router.get("/my", userAuth, async (req, res) => {
  try {
    const list = await Student.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
