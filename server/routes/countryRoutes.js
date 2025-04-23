import express from 'express';
import { getAllCountries } from '../controller/countryController.js';
import { searchCountry } from '../controller/countryController.js';

const router = express.Router();
router.get('/getAllCountries', getAllCountries);
router.get('/search', searchCountry);

export default router;
