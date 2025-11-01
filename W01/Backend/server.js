require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectToDb } = require("./db/connect");
const professionalRouter = require('./routes/professional');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use('/professional', professionalRouter);

connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`✅ Server running on port ${port}`);
    });
  } else {
    console.error("❌ Failed to connect to the database", err);
  }
});
