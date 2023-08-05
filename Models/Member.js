const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let memberSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
}, {
    collection: 'members'
  })

module.exports = mongoose.model('Member', memberSchema)