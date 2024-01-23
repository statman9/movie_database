require('dotenv').config()

const params = '&include_adult=false&language=en-US&page=1&region=US' 
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.TOKEN
    }
  };

module.exports = {
    get_movie_title: function(title) {
        var url_with_params = process.env.API_URL + '?query=' + title + params
        return require('node-fetch')(url_with_params, options)
            .then(res => res.json())
            .then(json => json.results)
    }
}
