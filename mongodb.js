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

const AddressSchema = new Schema({
    street1: {
     type: String,
    required: true
   },
   street2: {
    type: String,
    required: true
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
  

const collection=new mongoose.model("UserPass", LogInSchema)
const collection1=new mongoose.model("Address", AddressSchema)

module.exports=collection
module.exports=collection1

