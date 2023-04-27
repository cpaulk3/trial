const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uri = 'mongodb+srv://ddangelo:pick2things@manhattan.haooali.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to MongoDB Atlas'))
  .catch(err => console.error('connection error:', err.message));

  const AddressSchema = new Schema({
  street1: {
    type: String,
    required: true
  },
  street2: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  }
});
const address = mongoose.model("Addresses", AddressSchema)

module.exports=address

