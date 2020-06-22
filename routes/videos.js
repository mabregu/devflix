const express = require('express');

function videosApi(app) {
    const router = express.Router();

    app.use('/api/videos', router);

    router.get('/', (req, res, next) => {
        const { tags } = req.query;
        res.status(200).json({
            data: tags,
            message: 'listado de videos!'
        });
    })

    router.get('/:videoId', (req, res, next) => {
        const { videoId } = req.params;
        res.status(200).json({
            data: videoId,
            message: 'videos encontrado!'
        });
    })

    router.post('/', (req, res, next) => {
        res.status(201).json({
            data: {},
            message: 'videos creado!'
        });
    })

    router.put('/:videoId', (req, res, next) => {
        const { videoId } = req.params;
        res.status(200).json({
            data: videoId,
            message: 'video actualizado!'
        });
    })

    router.delete('/:videoId', (req, res, next) => {
        const { videoId } = req.params;
        res.status(200).json({
            data: videoId,
            message: 'video eliminado!'
        });
    })
}

module.exports = videosApi;