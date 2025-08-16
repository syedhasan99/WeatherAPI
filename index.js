const express = require('express');
const app = express();
const weatherRoutes = require("./routes/weatherRoutes");
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

app.use('/weather', weatherRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});