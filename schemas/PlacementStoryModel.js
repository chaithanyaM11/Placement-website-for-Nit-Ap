const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/placementDB");

const PlacementStorySchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Branch:{
        type:String,
        required: true
    },
    CompanyPlaced: {
        type: String,
        required: true
    },
    CTC: {
        type: String
    },
    JobType:{
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: true
    },
    PlacementType: { //off or on campus
        type: String,
        required: true
    },
    Story: {
        type: String
    },
    HowtoPrepare: {
        type: String,
        required: true
    },
    Suggestions: {
        type: String
    },
    Active:{
        type: Boolean
    }
});


module.exports = mongoose.model('Stories', PlacementStorySchema);