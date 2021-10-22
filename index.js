const axios = require('axios');
const params = {
  access_key: '1bc1ddcc6a5d9cc3f425c05aab8134e9',
  query: 'bhadrak'
}

axios.get('http://api.weatherstack.com/current', {params})
  .then(response => {
    const apiResponse = response.data;
    console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  }).catch(error => {
    console.log(error);
    console.log("changes made");
  });