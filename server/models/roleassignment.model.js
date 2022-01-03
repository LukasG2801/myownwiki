module.exports = mongoose => {
    let AssignmentSchema = mongoose.Schema({
        role: {
            type: String,
            required: [true, "Please include a role"]
        },
        email: {
            type: String,
            required: [true, "Please include an email"]
        }
    })


}