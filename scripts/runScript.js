const path = require('path');
const pinFileToIPFS = require('./pinFileToIPFS');

const filePath = path.join(__dirname, '../assets/jeep.jpg');

//For getting the token URI to pass to our contract
// const filePath = path.join(__dirname, '../data/metadata.json');

pinFileToIPFS(filePath);
