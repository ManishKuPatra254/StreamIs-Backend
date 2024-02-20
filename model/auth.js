import mongoose from "mongoose";


const authSchema = new mongoose.Schema({

    first_name: {
        type: String,
        // required: true
    },
    last_name: {
        type: String,
        // required: true
    },

    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    }

});


const auth = mongoose.model("auth", authSchema);

export default auth;