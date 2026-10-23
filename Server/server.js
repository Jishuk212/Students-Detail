const app = require("./app");
const connectDB = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  } catch (err) {
    process.exit(1);
  }
};

startServer();
