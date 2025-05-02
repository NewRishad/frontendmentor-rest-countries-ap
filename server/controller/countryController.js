import axios from 'axios';

export const getAllCountries = async (req, res) => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching countries:', error);
        res.status(500).json({message: 'Failed to fetch countries'});
    }
};

export const searchCountry = async (req, res) => {
    // const { name } = req.query;
    const name = 'kenya'; 
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error(`Error fetching ${name}:`, error.message);
        res.status(500).json({message: `Failed to fetch country ${name}`});
    }
}