const mongoose = require('mongoose')
const URI = 'mongodb://localhost:27017/result-management-system'

const connect = () => {
    return mongoose.connect(
        URI,
        {
      useUnifiedTopology: true,
      autoIndex: false
     }
    )
}
module.exports = connect

