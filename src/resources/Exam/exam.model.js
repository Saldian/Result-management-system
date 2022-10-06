const mongoose = require('mongoose')
 const examshema = mongoose.Schema({
     name: {
         type: String,
    
     }

 })

 const Exam = examshema.models('exam', examschema)
 module.exports = Exam