exports.getAllVideos =  (req, res) => {
    res.status(200).json({
        status: 'success',
        results: videos.length,
        data: {
            videos
        }
    });
};