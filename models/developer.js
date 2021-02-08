const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// const languageSchema = new Schema({name:String});

const developerSchema = new Schema ({
    username: {
        type: String,
        required: "Enter a Username",
        unique: true,
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."],
    },
    name: {
        type: String,
        required: "Enter your Name",
        trim: true,
    },
    gitHub: {
        type: String,
        trim: true,
        
    },
    languages: 
        // array
        [{type:String}],
    email:{
        type:String,
        unique: true,
        match:[/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    phone:{
        type: Number,
        validate: [({ length }) => length >= 10, "Phone number can't exceed 10 numbers."],
    },
    experience:{
        type: Number,
    },
    location:{
        type: String,
        trim: true,
    },
    occupation:{
        type: String,
        trim: true,
    },
    appRole: {
        type: String,
        trim: true,
    },
    followedUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "developersSchema",
    }],
    usersFollowing:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "developersSchema",
    }],
});

const Developer = mongoose.model("Developer", developerSchema);

module.exports = Developer;