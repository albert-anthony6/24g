const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Video must have a title'],
        unique: true
    },
    video: {
        type: String,
        required: [true, 'Video must have a path']
    },
    thumb: {
        type: String,
        require: [true, 'Video must have a thumbnail']
    },
    commentsQuantity: {
        type: Number,
        default: 0,
        min: 0
    },
    createdAt: {
        type: Date,
        default: Date.now() // mongoose converts this to current date format instead of ms
    }
});

const Video = mongoose.model('Video', videoSchema);

// SAVING DOCS TO DB AND MAKING SURE VALIDATORS WORK
// const testVideo = new Video({
//     title: 'Future of Drones',
//     video: 'https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/future_of_drones.mp4',
//     thumb: 'https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/future_of_drones.jpg'
// });

// testVideo.save().then(doc => console.log(doc)).catch(err => console.log(err))

module.exports = Video;