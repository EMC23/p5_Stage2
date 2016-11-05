var countries = [],
    country;          

var particleFountains = [];


p5.midi.onInput = function(event) {
    //console.log(event);
    //console.dir(event);
            console.log(event.data[0], event.data[2]);

    if (event.data[0] == 128 || event.data[0] == 144) { 
        country = {};
        country.data = event.data;
        country.x = 20;
        country.y = 128;
        countries[0] = country;

        printMidi(countries);
        //console.log('1');

        if (event.data[0] == 144) {
            var colorNoteMapping = {60: "blue", 64: "green", 55: "red", 53: "purple"};
            var color = colorNoteMapping[event.data[1]];
            //var limit = eI

            var t =
                {
                    name: "test",
                    colors: [color,[0,255,127,127],[0,255,64,32]],
                    lifetime: 600,
                    angle: [330,360],
                    x: Math.random(),
                    y: Math.random(), 
                    limit: event.data[2]/10,
                    speed: event.data[2]/10
                };
            var newFountain = new Fountain(null, t);
            particleFountains.push(newFountain);
        } else {
            var delay = 1000;
            setTimeout(function() {
                particleFountains.shift();
            }, delay);
        }



    } else {
        country = {};
        country.data = event.data;
        country.x = 300;
        country.y = 128;
        countries[1] = country;
        //console.log('2');
    }
}

var of;

function setup() {
    createCanvas(660, 400);
    textFont('arial', 64);
    textAlign(LEFT);

    // xy, if present, overrides the data input location
    // (JSON object, name of a particle definition) OR
    // (null, user-created particle definition)
    //
    //
    //
    var t =
        {
            name: "test",
            colors: ["blue",[0,255,127,127],[0,255,64,32]],
            lifetime: 600,
            angle: [330,360],
            x: 0.2,
            y: 0.1
        };
    of = new Fountain(null, t);

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

function printMidi(countries) {

    //console.log('print midi:' + event.data[0] + ',' + event.data[1] + ',' + event.data[2] );
    var country1 = countries[0],
        country2 = countries[1];

    clear();
    strokeWeight(0);

    if (country1){
        text(country1.data[0], country1.x, country1.y);  
    }

    if (country2) {
        text(country2.data[0], country2.x, country2.y);
    }

}


function Particle() {
    this.velocity = createVector();  // applied to location every Step
    this.partSize = 0;               // typically width and height, scale factor for images ( 1 means no scaling)
    this.location = createVector();  // center of all shapes and images
    this.life = 0;                   // 0 to 1
    this.rotation = 0;               // in degrees
    this.id = 0;                     // unique id counter per Fountain
}


function draw() {
    background(10);

    for (var i = 0; i < particleFountains.length; i++) {
        var particleFountain = particleFountains[i];
        particleFountain.Draw();
        particleFountain.Create();
        particleFountain.Step();
    }
    noStroke();
    text(of.length, width/2, 20);
    stroke(0);
}
