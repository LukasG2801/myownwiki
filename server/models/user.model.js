const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
module.exports = mongoose => {
    let UserSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please include your name"]
        },
        email: {
            type: String,
            required: [true, "Please include your email"]
        },
        password: {
            type: String,
            required: [true, "Please include your password"]
        },
        role: {
            type: String,
            required: [true, "Please provide an role"]
        },
        tokens: [{
            token: {
                type: String,
                required: true
            }
        }]
    })

    UserSchema.pre("save", async function(next) {
        const user = this
        if (user.isModified("password")) {
            user.password = await bcrypt.hash(user.password, 8)
        }
        next()
    })

    UserSchema.methods.generateAuthToken = async function() {
        const user = this
        const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, "secret")

        user.tokens = user.tokens.concat({ token })
        await user.save()

        return token
    }

    UserSchema.statics.findByCredentials = async(email, password) => {
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error({ error: "Invalid login details" })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            throw new Error({ error: "Invalid login details" })
        }
        return user
    }

    const User = new mongoose.model('user', UserSchema)
    return User
}