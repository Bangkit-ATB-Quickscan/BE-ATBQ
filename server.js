const express = require('express');
const bodyParser = require('body-parser');
const detectionRoutes = require('./routes/detectionRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Initialize routes
app.use('/api', detectionRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
