const Video = require('../models.js/videoModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllVideos = catchAsync(async (req, res) => {
    const videos = await Video.find();

    res.status(200).json({
        status: 'success',
        results: videos.length,
        data: {
            videos
        }
    });
});