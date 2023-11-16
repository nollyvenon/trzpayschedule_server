const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {Schema} = mongoose;

// Create Schema
const UserSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    salutation: {
        type: String,
    },
    gender: {
        type: String,
    },
    maritalStatus: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    mobileNumber: {
        type: String
    },
    address: {
        type: String
    },
    address2: {
        type: String
    },
    postal_code: {
        type: String
    },
    city_name: {
        type: String
    },
    state_name: {
        type: String
    },
    country_code: {
        type: String
    },
    pin_code: {type: String},
    last_event_date: {
        type: Date,
        default: Date.now
    },
    next_event_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: 1
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});


UserSchema.methods.verifyPassword = async function (password) {
    const match = await bcrypt.compare(password, this.password);

    if (match) {
        return true;
    } else {
        return false;
    }
};

UserSchema.pre("save", next => {
    this.updated_at = Date.now()
    next()
})

module.exports = User = mongoose.model("users", UserSchema);
