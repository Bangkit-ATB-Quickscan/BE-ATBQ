const axios = require('axios');
require('dotenv').config();

exports.getPrediction = async (imageData) => {
    const mlApiUrl = process.env.ML_API_URL;
    try {
        const response = await axios.post(mlApiUrl, { imageData });
        return response.data; // Assuming this returns the result image URL or data
    } catch (error) {
        throw new Error('Failed to get prediction from ML API: ' + error.message);
    }
};
