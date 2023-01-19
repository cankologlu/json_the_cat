const request = require("request");
const fs = require("fs");
const query = process.argv.slice(2);
const url = "https://api.thecatapi.com/v1/breeds/search?q="

request (url + query,(error, response, body) => {


  // console.log(typeof body);
  // console.log("error is:", error)
  // console.log("statusCode:", response && response.statusCode);
  // console.log("body:", body[0]);
  if (error) {
    console.log("Something went wrong!")
  }
  let result = JSON.parse(body);
  if(result.length === 0) {
    console.log("Breed not found!")
  } else {
    console.log(result);
    console.log(typeof result);
    console.log(result[0].name)
   }

  

} )