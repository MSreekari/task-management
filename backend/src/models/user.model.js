const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required : [true, "Username is required"],
            trim : true
        },
        email:{
            type : String,
            required : [true, "Enter valid email"],
            unique : true,
            lowercase : true,
            trim : true
        },
        password:{
            type : String,
            required : true,
            minlength : 8
        },
        role:{
            type : String,
            required : true,
            enum : ['admin', 'user'],
            default : 'user'
        },
        isVerified:{
            type : Boolean,
            default : false
        },
        verificationCode:{
            type : String
        }
    },
    {timeStamps : true}
);

const User = mongoose.model("User", userSchema);
module.exports = User;
