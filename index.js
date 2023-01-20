const {fetchBreedDescription} = require("./breedFetcher");
const breedName = process.argv.slice(2);


fetchBreedDescription(breedName,(error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
    console.log(desc);
  }else {
    console.log(desc);
  }
})
//console.log(module);