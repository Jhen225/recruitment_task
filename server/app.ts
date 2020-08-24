require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const PORT = Number(process.env.PORT) || 3300;

require('./db/sequelize');

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

app.get('/', async (req,res) => {
    try {
        console.log(req.body);

        return res.json({success: true})
    } catch (error) {
        return res.status(500).end();
    }
});

app.post('/', async (req, res) => {
    const { first_name, last_name, email, date } = req.body;
    if (!first_name) return res.status(400).end();
    if (!last_name) return res.status(400).end();
    if (!email) return res.status(400).end();
    if (!date) return res.status(400).end();

    try {
        console.log(req.body);
        return res.status(201).json({success: true});
    } catch (error) {
        console.log(error)
        return res.status(500).end();
    } 
});

app.listen(PORT, '0.0.0.0', () => console.log(`Server started on port: ${PORT}`));