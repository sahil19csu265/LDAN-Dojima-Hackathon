import mongoose from 'mongoose';
import Dotenv from 'dotenv';
Dotenv.config();

const dbOptions = {
  maxPoolSize: 5,
};
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL, dbOptions, (err) => {
  if (err) {
    console.log("DB Connection Failed..", err);
  } else {
    console.log("DB Connection Created...");
  }
});

export default mongoose;
