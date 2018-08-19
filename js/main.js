import * as PIXI from 'pixi.js';

var app = new PIXI.Application(800, 600, {backgroundColor: 0x1099bb});
document.body.appendChild(app.view);

// create a new Sprite from an image path
var texture = PIXI.Texture.fromImage(
  'public/assets/das.lineal.svg',
  //	'https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/bee.svg',
  undefined,
  undefined,
  1.0,
);

var bunny = new PIXI.Sprite(texture);

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

// Listen for animate update
app.ticker.add(function(delta) {
  // just for fun, let's rotate mr rabbit a little
  // delta is 1 if running at 100% performance
  // creates frame-independent transformation
  bunny.rotation += 0.1 * delta;
});
