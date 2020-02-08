const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes/restaurantRoutes');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
dotenv.config();
const dbUri = process.env.DB_URL;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(dbUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("Database connected.");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();

app.use('/api', [routes]);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'client/build' ));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
};

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
