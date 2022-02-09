var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  track = loadImage("images/track.jpg");
  Car1 = loadImage("images/car1.png");
  Car2 = loadImage("images/car2.png"); 
  Car3 =  loadImage("images/car3.png");
  inicio = loadImage("images/background.png")
  //fin = loadImage("images/gameover.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 100, displayHeight-100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 // background(inicio);
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    console.log("the end");
  }

}
