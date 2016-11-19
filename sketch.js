var countries = [],
    country,
    indCountry;

var notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
var rose;
var stars;

jQuery.get('countries.json', function(json) {
     countries = json.countries;
});

var myVoice = new p5.Speech(); // new P5.Speech object


p5.midi.onInput = function(event) {
    //console.log(event);

    if (event.data[0] == 248) {
        return;
    }

    console.dir(event);

    //if (event.data[0] == 128 || event.data[0] == 144) {

      for (var i = 0; i < 5; i++) {
        //console.log(countries[i]);
        //var indCountry = countries[i];
        var indCountry = countries[Math.floor(Math.random()*countries.length)]

      }

      country = {};
      country.data = [event.data[0], event.data[1], event.data[2]];

        //console.log(typeof event.data);

        country.data.push(notes[country.data[1] % 12]);

        console.log(country.data[3]);

      country.x = 20;
      country.y = 128;

      countries[0] = country;
      console.log('Country:' + indCountry);

      printMidi(country, indCountry);

      //console.log('1');

    /*} else {

      country = {};
      country.data = event.data;
      country.x = 300;
      country.y = 128;
      countries[1] = country;
      console.log('2');
    }*/

    changeColor();


}
function printMidi(country,indCountry) {

  //var country = countries[0];
  //,      country2 = countries[1];

  clear();
  strokeWeight(0);

  text(indCountry, 10, 300);


    var currentNote = country.data[3];
    console.log("current note: " + country.data[3]);

    text(currentNote,10,400);


  if (country){
    text(country.data, country.x, country.y);
  }

  myVoice.speak(indCountry);

  //if (country2) {
  //  text(country2.data[0], country2.x, country2.y);
  //}

}

function preload()
{
    // load image
    rose = loadImage("images/rose.png");
    stars = loadImage("images/star-bg.jpg");
}

function setup(indCountry) {
    createCanvas(640, 480);
    textFont('arial', 64);
    textAlign(LEFT);

    // hide mouse cursor
    noCursor();


    test = createImage(230, 230);
    test.loadPixels();

    var r = 20;
    var g = 40;
    var b = 156;


    console.log(r,g,b,a);

    for(var x = 0; x < test.width; x++) {
        for(var y = 0; y < test.height; y++) {
            var a = map(y, 0, test.height, 255, 0);
            test.set(x, y, [r, g, b, a]);
        }
    }

    test.updatePixels();


}

function changeColor() {



}




function draw() {
    //background(255);

    // display background image
    //image(stars, 0, 0);
    //image(rose,mouseX,mouseY); // draws the image at the specified x and y location
    //image(rose,canvas.width/2-rose.width/2,canvas.height/2-rose.height/2); // draws the image at the specified x and y location









    // replace this with midi control
    //image(test, mouseX-test.width/2, mouseY-test.height/2);
    image(test, 130, 180);





}

function mousePressed(){
    // if in bounds:
    if(mouseX<width && mouseY<height) {
        stroke('rgb(255,255,0)');
        strokeWeight(2);
        fill('rgba(255,255,0, 0.25)');
        ellipse(mouseX, mouseY, 50, 50); // circle
    }
}

function mouseClicked() {
    // if in bounds:
    if(mouseX<width && mouseY<height) {
        stroke('rgb(0,255,0)');
        strokeWeight(2);
        fill('rgba(0,255,0, 0.25)');
        ellipse(mouseX, mouseY, 50, 50);
        x = y = 50;
    }
}


