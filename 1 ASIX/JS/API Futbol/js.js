const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://football98.p.rapidapi.com/premierleague/results',
  headers: {
    'X-RapidAPI-Key': 'a9215a925dmsh870880004fd4bcdp1e06bajsn95a1e402d5d4',
    'X-RapidAPI-Host': 'football98.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}