const classshema = mongoose.Schema({
    name: {
        type: String,
    }
    })
   
    const Class = classShema.models('class', classSchema)
    module.exports = Class