const mlService = require('../services/mlService');
const detectionModel = require('../models/detectionModel');

exports.detectTB = async (req, res) => {
    try {
        const prediction = await mlService.getPrediction(req.body);
        const result = await detectionModel.saveResult(prediction);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getResults = async (req, res) => {
    try {
        const results = await detectionModel.getResults();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
