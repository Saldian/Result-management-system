const teachershema = mongoose.Schema({
    firstName: {
        type: String,
        maxLenght: 25,
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
    email: {
        type: String,
        maxLenght: 50
    }
   
    })
   
    const Teacher = teacherShema.models('teacher', teacherSchema)
    module.exports = Teacher