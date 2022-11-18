// ORIGINAL REQUIRE SYNTAX BELOW
// const axios = require('axios').default;
// const express = require('express').default;
// const cheerio = require('cheerio').default;

// import axios from 'axios';
// import cheerio from 'cheerio';
// import fs from 'fs';
// import request from 'request';

// //const url = 'https://memegen-link-examples-upleveled.netlify.app/';

// const WriteStream = fs.createWriteStream('placeholderText.txt', 'utf-8');

// request('https://memegen-link-examples-upleveled.netlify.app/, (err, resp, html) =>{
//   if (!err && resp.statusCode == 200){
//     console.log('Request was a success');

//     const $ =cheerio.load(html);
//     $('img').each((index,image)=>{
//       let img = $(image).attr('src');
//       let baseUrl = 'https://memegen-link-examples-upleveled.netlify.app/'
//       let links = baseUrl + img
//     })
//   } else {
//     console.log('Request failed');
//   }
// } );

// const PORT = 8000;

// axios(url)
// .then(response => {
//   const html = response.data;
//   const $ = cheerio.load(html);
//   $('/*WHAT I WANT TO TARGET*/', html).each(function() {
//      $(this). /* ATTRIBUTE I WANT TO TARGET, like text */ ();
//      $(this).find.attr('img')
// });
// };

// app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

/* FIGURE OUT WHAT I NEED TO PUT INSIDE CONTENT()
A TAGS ALL START WITH
<a href="https://memecomplete.com/edit/https://api.memegen.link/images/imsorry/oh,_i'm_sorry/i_thought_this_was_america.jpg" target="_parent">
          <img src="https://api.memegen.link/images/imsorry/oh,_i'm_sorry/i_thought_this_was_america.jpg?width=300">
        </a>
- i need to target the parent somehow, chaining?

  - I need to use fetch
  - need to target the parent element then the attribute
  - other people are using blob for some shit : https://developer.mozilla.org/en-US/docs/Web/API/Blob

  - WriteStream?
  - I need to make directories
  - and a loop for saving, stop at 10
  - i need to turn urls into a string, dont know why
 */

/* MAYBE I COULD USE THIS???: */

// import axios from 'axios';
// import fs from 'fs';

// async function downloadImage('https://memegen-link-examples-upleveled.netlify.app/, filepath', '/Users/susannamcintyre/projects/node.js-meme-scraper-') {
//     const response = await Axios({
//       'https://memegen-link-examples-upleveled.netlify.app/, filepath',
//         method: 'GET',
//         responseType: 'stream'
//     });
//     return new Promise((resolve, reject) => {
//         response.data.pipe(fs.createWriteStream('/Users/susannamcintyre/projects/node.js-meme-scraper-)')
//             .on('error', reject)
//             .once('close', () => resolve(/Users/susannamcintyre/projects/node.js-meme-scraper-));
//     });
// }

import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

const getBody = async () => {
  // get html text from reddit
  const response = await fetch(
    'https://memegen-link-examples-upleveled.netlify.app/',
  );
  // using await to ensure that the promise resolves
  const body = await response.text();

  // parse the html text and extract titles
  const $ = cheerio.load(body);
  const div = $('div > a > img'); // list of images

  div.each(function (index) {
    console.log(index + ': ' + $(this).attr('src'));
  });
};

getBody();

console.log('A string to show index.js works');
