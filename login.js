const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uri = 'mongodb+srv://ddangelo:pick2things@manhattan.haooali.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to MongoDB Atlas'))
  .catch(err => console.error('connection error:', err.message));

const LogInSchema = new Schema({
  name: {
    type: String,
    required: true    
  },
  password: {
    type: String,
    required: true
  }
});

const login = mongoose.model("UserPass", LogInSchema)

module.exports=login

