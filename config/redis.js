const { createClient } = require("redis");

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

redisClient.on("error", (err) => {
  console.error("❌ Redis Client Error:", err);
});

redisClient.on("connect", () => {
  console.log("✅ Redis connected");
});

redisClient.on("reconnecting", () => {
  console.log("🔄 Redis reconnecting...");
});

(async () => {
  console.log("🚀 Connecting to Redis at", process.env.REDIS_HOST, ":", process.env.REDIS_PORT);
  await redisClient.connect();
})();

module.exports = redisClient;
