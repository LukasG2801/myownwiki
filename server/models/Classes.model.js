module.exports = mongoose => {
    let ClassSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please include a class name"],
            unique: true
        },
        object: {
            type: String
        },
        extensions: [String],
        heading: String,
        description: String
    })

    ClassSchema.pre("save", async function(next) {
        next()
    })

    const Class = new mongoose.model('class', ClassSchema)
    return Class
}