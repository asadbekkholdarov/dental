// backend/controllers/doctorController.js
const Doctor = require("../models/Doctor");

exports.createDoctor = async (req, res) => {
  try {
    const savedDoctor = await Doctor.create(req.body);
    res.status(201).json({
      status: "success",
      data: savedDoctor,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({
      status: "success",
      length: doctors.length,
      data: doctors,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
