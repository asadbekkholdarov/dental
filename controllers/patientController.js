// backend/controllers/patientController.js
const Patient = require("../models/Patient");

exports.createPatient = async (req, res) => {
  const newPatient = new Patient(req.body);
  try {
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({
      length: patients.length,
      patients,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    res.status(200).json({
      patient,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateMedicalHistory = async (req, res) => {
  const { id } = req.params;
  const { treatment } = req.body;

  try {
    const patient = await Patient.findById(id);
    if (!patient) throw new Error("Patient not found");

    patient.medicalHistory.push({ treatment });
    const updatedPatient = await patient.save();
    res.status(200).json(updatedPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
