# Weather API using Redis cache

A simple **Node.js API** that fetches real-time weather data from a **3rd-party API (Visual Crossing)** and uses **Redis** for caching to improve performance and reduce redundant API calls.

This project demonstrates:
- Working with 3rd-party APIs
- Using Redis as an in-memory cache
- Managing environment variables
- Implementing error handling and rate limiting

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-api.git
cd weather-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
PORT = 3000
WEATHER_API_KEY = your_api_key
WEATHER_API_URL = https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

4. Run the server:

```bash
npm start
```

5. Get Weather by City
   
```bash
GET /api/weather/:city
```

## Project Idea Reference

This project idea comes from roadmap.sh:
🔗 [https://roadmap.sh/projects/weather-api-wrapper-service](https://roadmap.sh/projects/weather-api-wrapper-service)
