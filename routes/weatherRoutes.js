const express = require("express");
const router = express.Router();
const axios = require("axios");
const dotenv = require("dotenv");
const redisClient = require("../config/redis");
dotenv.config();

router.get("/", async (req, res) => {
  let city = req.query.city;
  let result;
  let isCached = false;

  if (!city) {
    return res.status(400).json({ message: "City parameter is required" });
  }

  try {
    const cachedResult = await redisClient.get(city);
    if (cachedResult) {
      isCached = true;
      result = JSON.parse(cachedResult);
    } else {
      let url = `${process.env.WEATHER_API_URL}/${city}?unitGroup=us&key=${process.env.WEATHER_API_KEY}&contentType=json`;
      const response = await axios.get(url);
      result = response.data;
      if (result.length == 0) {
        return res
          .status(400)
          .json({ message: "No data found for the specified city" });
      }
      await redisClient.set(city, JSON.stringify(result), {
        EX: 300,
        NX: true,
      });
    }

    // await redisClient.close();
    process.on("SIGINT", async () => {
      await redisClient.quit();
      process.exit(0);
    });

    res.status(200).json({
      isCached,
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching the weather data",
      error: error.message,
    });
  }
});

module.exports = router;
