const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        filename: {
            type: String,
            default: "default.jpg",
        },
        url: {
            type: String,
            default:
                "https://media.istockphoto.com/id/1218975473/photo/group-of-college-student-friends-meeting-and-talking-in-busy-communal-campus-building.jpg?s=612x612&w=0&k=20&c=ggYncioFDbZjXryC923y3Jmdc3uNFAsmZML-ftZYXYI=",
        },
    },
});

module.exports = mongoose.model("Event", eventSchema);
