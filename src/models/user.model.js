import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  role: String,
  pets: [String]
});

export default mongoose.model('User', userSchema);
