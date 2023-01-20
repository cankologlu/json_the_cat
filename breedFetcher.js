const request = require("request");
const fs = require("fs");
const query = process.argv.slice(2);
const url = "https://api.thecatapi.com/v1/breeds/search?q="

const fetchBreedDescription = (breedName, callBack) => {

request (url + breedName,(error, response, body) => {
  let result = JSON.parse(body);
  if (error) {
    callBack("Something went wrong!")
  }
  if(result.length === 0) {
    callBack("Breed not found!")
  } else {
    callBack(null, result[0].description)
   }
});
}

module.exports = {fetchBreedDescription};

// console.log(module);