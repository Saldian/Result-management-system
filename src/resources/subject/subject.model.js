const subjectshema = mongoose.Schema({
    name: {
        type: String,
    }
    })
   
    const Subject = subjectShema.models('subject', subjectSchema)
    module.exports = Subject