module.exports = mongoose => {
    let RoleSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please include a role type"],
            unique: true
        }
    })

    RoleSchema.pre("save", async function(next) {
        next()
    })

    const Role = new mongoose.model('role', RoleSchema)
    return Role
}