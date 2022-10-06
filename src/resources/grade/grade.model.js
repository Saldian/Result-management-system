const gradeshema = mongoose.Schema({
    name: {
        type: String,
    }

    })
   
    const Grade = gradeShema.models('grade', gradeSchema)
    module.exports = Grade