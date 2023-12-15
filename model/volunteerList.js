const mongoose = require('mongoose')

const volnteerSchema = new mongoose.Schema({
  voLevel:{
    type: String,
    required: true,
    default:"Not Entered"
  },
  name: {
    type: String,
    required: true,
    default:"Not Entered"
  },
  profession: {
    type: String,
    required: true,
    default:"Not Entered"
  },
  city: {
    type: String,
    required: true,
    default:"Not Entered"
  },
  country:{
    type: String,
    required: true,
    default:"Not Entered"
  },
  remarks:{
    type: String,
    required: true,
    default:"Not Entered"
  }
})

module.exports = mongoose.model('volunteerList', volnteerSchema)