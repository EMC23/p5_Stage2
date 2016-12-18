
var lastKnobPosition = 0;
var currentPosition;
var origRoseWidth;
var origRoseHeight;
var myHtml;
var indPadItem;

var padWidth = 67;
var padHeight = 67;
var padX = 0;
var padY = 0;
var padNumber = 9;

//console.log("Last position: " + lastKnobPosition);

p5.midi.onInput = function(event) {
    clear();

    console.dir(event);

    pad(event);
    knob(event);

}


function preload()
{
    // load image
    rose = loadImage("images/rose.png");
    stars = loadImage("images/star-bg.jpg");

}


function setup(event) {


    var myCanvas = createCanvas(640, 480, 'world');
    myCanvas.parent('myCanvas');


    origRoseWidth = rose.width;
    origRoseHeight = rose.height;

/*
    myHtml = createDiv('This is an HTML string!');
    myHtml.position(10, 10);
    myHtml.class("customText");
    myHtml.style("font-family", "monospace");
    myHtml.style("background-color", "#FF0000");
    myHtml.style("color", "#FFFFFF");
    myHtml.style("font-size", "18pt");
    myHtml.style("padding", "6px");
    myHtml.parent('myCanvas');
*/

    textFont('arial', 48);
    textAlign(LEFT);

    /*
    test = createImage(640, 480);
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
    */

    createPads(event);
}


function draw() {

    // background(255);

    // display background image
    //image(stars, 0, 0);
    // image(rose,mouseX,mouseY); // draws the image at the specified x and y location
    //image(rose,canvas.width/2-rose.width/2,canvas.height/2-rose.height/2); // draws the image at the specified x and y location
    // replace this with midi control
    // image(test, mouseX-test.width/2, mouseY-test.height/2);
    //image(test, 0, 0);

    //console.log(rose);
}


function knob(event) {
/*
    var currentPosition = event.data[2];

    console.log("Current position: " + currentPosition);
    console.log("Last position: " + lastKnobPosition);

    if (event.data[0] == 176) {
        console.log("knob turn");
        var knobValue = event.data;
        text('knob' + knobValue, 220, 150);
    }*/

    //newWidth = (origRoseWidth/127) * event.data[2];
    //newHeight = (origRoseHeight/127) * event.data[2];
    //console.log(newWidth);

    //rose.resize(newWidth, newHeight);

    /*if (lastKnobPosition >= currentPosition ) {
        console.log("knob down");
        var knobStatus = "Knob Down";
        text(knobStatus, 220, 50);
    }

    if (lastKnobPosition <= currentPosition) {
        console.log("knob up");
        var knobStatus = "Knob Up";
        text(knobStatus, 320, 50);
    }

    lastKnobPosition = currentPosition;
*/
}


function pad() {

    console.log(event.data[1]);

    if (event.data[0] == 128 || event.data[0] == 144) {
        console.log('pad tap');
        var padValue = event.data;
        text(padValue, 10, 150);
    }

    if (event.data[0] == 144 & event.data[2] == 127) {
        console.log("pad down");
        var padStatus = "Pad Down";
        text(padStatus, 10, 50);
    }

    if (event.data[0] == 128 & event.data[2] == 0) {
        console.log("pad up");
        var padStatus = "Pad Up";
        text(padStatus, 10, 50);
    }

}


function createPads(event) {


    //console.log(event.data[1]);
    var indPadItem = 9;


    for (var x = 9; x <= 16; x++) {
        console.log(x);
            stroke(100);
            strokeWeight(4);
            fill(153);
            rect(padX, padY, padWidth, padHeight);
            textSize(24);
            textAlign(CENTER, CENTER);
            textWidth(padWidth);
            textFont('monospace');
            fill(0);
            stroke(255);
            strokeWeight(1);
            text(indPadItem, padX + padWidth/2, padHeight/2);


        indPadItem = indPadItem + 1;

        padX = padX + padWidth;


    }


    pads = createDiv(indPadItem);
    pads.class("padItem");
    pads.parent('myCanvas');

}



