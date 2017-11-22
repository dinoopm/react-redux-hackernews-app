const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
let Promise = require('bluebird');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {});
})

app.get('/getStories/:type', function (req, res) {

    getStories(req,res,req.params.type,10);


});

function getStories(req, res,type,limit){
    let storyListURL = `https://hacker-news.firebaseio.com/v0/${type}.json?print=pretty`;

    let promises = [];

    request(storyListURL, function (err, response, body) {

        let storyids = JSON.parse(body);
      
        function getStory(id) {
             let storyURL = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
              return new Promise(function(resolve, reject) {
                    request(storyURL, function(err, res, body) {
                        if (err) { return reject(err); }
                        return resolve(JSON.parse(body));
                    });
              });
      }


      storyids.forEach((id,index)=>{
          
          if(limit){
            if(index<limit){
             promises.push(getStory(id));
            }
          }
          else{
            promises.push(getStory(id));
          }

      });

      Promise.all(promises).then(function(stories) {
           res.json(stories);
      });  


    });  

}


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})