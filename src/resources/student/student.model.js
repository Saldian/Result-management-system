const studentshema = mongoose.Schema({
    firstName: {
        type: String,
        maxLenght: 25
    },
    middleName: {
        type: String,
        maxLenght:25
    },
    lastName: {
        type: String,
        maxLenght:25
    },
    phone: {
        type: String,
        maxLenght:25
    },
    address:  {
        type: String,

    },
    password: {
        type: String,
    },
    gender: {
        type: String,
    },
    
     })
   
    const Student = studentShema.models('student', studentSchema)
    module.exports = Student