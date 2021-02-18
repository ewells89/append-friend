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
    about: {
        type: String,
        default: ""
    },
    email:{
        type:String,
        unique: true,
        match:[/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    phone:{
        type: Number,
        validate: [({ length }) => maxlength =11, "Phone number can't exceed 10 numbers."],
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
        ref: "developerSchema",
    }],
    usersFollowing:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "developerSchema",
    }],
    imgURL: {
        type: String,
        default: "",
    },
});
developerSchema.pre("save", function(next){
    this.username = this.username.toLowerCase();
    next();
});

const Developer = mongoose.model("Developer", developerSchema);

module.exports = Developer;