const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const axios = require('axios');
const morgan = require('morgan');
require('dotenv').config();

const itinerariesData = require('./data/itineraries.json');
const locations = require('./data/locations.json');
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cors());
app.use(morgan('tiny'));

app.use('/api', router);

router.get('/itineraries', (req, res) => res.send(itinerariesData));
router.get('/locations', (req, res) => res.send(locations));

/**
 * Verify recaptcha
 */
router.post('/recaptcha', async (req, res) => {
  const { token } = req.body;
  const secretKey =
    process.env.RECAPTCHA_ENTERPRISE_SECRET_KEY ||
    '6LeFG90hAAAAAI4mKnvB-VvgHJpxnTqBsuw2x9PD';

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    );
    console.log(response.data);

    if (response?.data?.score > 0.5) {
      // Save data to the database from here
      res.status(200).json({
        message: 'Google ReCaptcha Success: You are human 👨 👩',
        result: response.data,
      });
    } else {
      res.status(405).json({
        message: 'Google ReCaptcha Failed: You are robot 🤖',
        result: response.data,
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
