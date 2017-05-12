"use strict";
 
const app = require('express')();
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/scrape', (req,res)=> {
    let url = "http://www.imdb.com/title/tt1229340/";
    
    request(url, (error, response, html)=>{
        console.log("************");
    
       if(!error){
           //Cheerio library will give the jQuery functionality
           //console.log(html)
           var $ = cheerio.load(html);
           let title, rating, release;
           let json = {
               title : "",
               release : "",
               rating : ""
           }
           
           json.title = $('.title_wrapper h1').text().trim();
           json.release = $('a[title = "See more release dates"]').text().trim();
           json.rating = $('.ratingValue').text().trim();
           console.log(json);

           res.status(200).json(json);  

       }      
    });
});

app.listen("8008", ()=>{
    console.log("server listening on port 8008");
});

