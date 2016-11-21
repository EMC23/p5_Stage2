

var lastKnobPosition = 0,
    currentPosition;

//console.log("Last position: " + lastKnobPosition);

p5.midi.onInput = function(event) {
    clear();
    strokeWeight(0);

    console.dir(event);

    pad();
    knob(event);

}

function knob(event) {

    var currentPosition = event.data[2];

    console.log("Current position: " + currentPosition);
    console.log("Last position: " + lastKnobPosition);

    if (event.data[0] == 176) {
        console.log("knob turn");
        var knobValue = event.data;
        text('knob' + knobValue, 220, 150);
    }

    if (lastKnobPosition >= currentPosition ) {
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

}



function pad() {

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



function setup() {
    createCanvas(640, 480);
    textFont('arial', 48);
    textAlign(LEFT);
}
