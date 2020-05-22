const Video = require('../models.js/videoModel');

exports.getAllVideos = async (req, res) => {
    try{
        const videos = await Video.find();
    
        res.status(200).json({
            status: 'success',
            results: videos.length,
            data: {
                videos
            }
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};