const express = require('express');
const { VideosService } = require('../services/videos')

function videosApi(app) {
    const router = express.Router();
    const videoService = new VideosService();
    app.use('/api/videos', router);

    router.get('/', async(req, res, next) => {
        const { tags } = req.query;

        try {
            const videos = await videoService.getVideos({ tags });

            res.status(200).json({
                data: videos,
                message: 'video listed'
            });
        } catch (e) {
            next(e);
        }
    })

    router.get('/:videoId', async(req, res, next) => {
        const { videoId } = req.params;
        try {
            const video = await videoService.getVideo({ videoId });

            res.status(200).json({
                data: video,
                message: 'video retrieved'
            });
        } catch (e) {
            next(e);
        }
    })

    router.post('/', async(req, res, next) => {
        const { body: video } = req;

        try {
            const createVideoId = await videoService.createVideo({ video });

            res.status(201).json({
                data: createVideoId,
                message: 'videos creado!'
            });
        } catch (e) {
            next(e);
        }
    })

    router.put('/:videoId', async(req, res, next) => {
        const { videoId } = req.params;
        const { body: video } = req;

        try {
            const updatedVideoId = await videoService.updateVideo({
                videoId,
                video
            });

            res.status(200).json({
                data: updatedVideoId,
                message: 'video actualizado!'
            });
        } catch (e) {
            next(e);
        }
    })

    router.delete('/:videoId', async(req, res, next) => {
        const { videoId } = req.params;
        try {
            const deleteVideoId = await videoService.deleteVideo({ videoId });
            res.status(200).json({
                data: deleteVideoId,
                message: 'video eliminado!'
            });
        } catch (e) {
            next(e)
        }
    })
}

module.exports = videosApi;