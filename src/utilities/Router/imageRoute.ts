import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    let { filename, width, height} = req.query;
    res.send(`${filename}, ${width}, ${height}`);
    
});

export default router;