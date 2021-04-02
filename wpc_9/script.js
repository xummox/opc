// console.log("is our script file working?");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
// console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyZ1peaK6cK14vts" }).base(
    "appxxHLAxOjb6XDUX"
  );

// get our collection base, select all the records
// specify functions that will receive the data 
base("photoframe")
  .select({})
  .eachPage(gotPageOfFrames, gotAllFrames);

// an empty array to hold our data
var frames = [];

// callback function that receives our data
function gotPageOfFrames(records, fetchNextPage) {
    console.log("gotPageOfFrames()");
    // add the records from this page to our array
    frames.push(...records);
    // request more pages
    fetchNextPage();
  }

// call back function that is called when all pages are loaded
  function gotAllFrames(err) {
    console.log("gotAllFrames()");  

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogFrames();
  showFrames();
}

// just loop through the books and console.log them
function consoleLogFrames() {
    console.log("consoleLogFrames()");
    frames.forEach(frame => {
      console.log("frame:", frame);
    });
  }

// look through our airtable data, create elements
function showFrames() {
    console.log("showFrames()");
    frames.forEach(frame => {
      
     

      //var frameDimension = document.createElement("p");
      //frameDimension.innerText = frame.fields.dimension;
      //document.body.append(frameDimension);

      //var frameImage = document.createElement("img");
      //frameImage.classList.add("song-image");
      //frameImage.src = frame.fields.photo_frame_image[0].url;
      //document.body.append(frameImage);

      // create container for each song
    var frameContainer = document.createElement("div");
    frameContainer.classList.add("frame-container");
    document.querySelector(".container").append(frameContainer);

    // add song titles
    var frameTitle = document.createElement("h1");
    frameTitle.classList.add("frame-title");
    frameTitle.innerText = frame.fields.title;
    frameContainer.append(frameTitle);

    var frameDimension = document.createElement("h1");
    frameDimension.classList.add("frame-dimension");
    frameDimension.innerText = frame.fields.dimension;
    frameContainer.append(frameDimension);

    var frameDescription = document.createElement("p");
    frameDescription.classList.add("frame-description");
    frameDescription.innerText = frame.fields.description;
    frameContainer.append(frameDescription);

    var frameImage = document.createElement("img");
    frameImage.classList.add("frame-image");
    frameImage.src = frame.fields.photo_frame_image[0].url;
    frameContainer.append(frameImage);
    
    frameContainer.addEventListener("click", function(event) {
    frameDescription.classList.toggle("active");
    frameImage.classList.toggle("active");
      });

    });
}