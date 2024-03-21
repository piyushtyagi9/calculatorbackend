const mongoose = require('mongoose');

let phoneSchema = new mongoose.Schema({
    PhoneNumber:{
        type: String,
        required:true
    },
    RoofTopArea:{
        type: Number,
        required:true
    },
    MonthlyBill:{
        type: Number,
        required:true
    }
})


const Users = mongoose.model('users' , phoneSchema);


module.exports = Users