class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createImg("images/titulo.png");
    this.reset = createButton("reset");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    background(inicio);
    //image(inicio, 0, 0, displayWidth - 100, displayHeight-100)
    //this.title.html("Car Racing Game");
    this.title.size(290, 250);
    this.title.position(displayWidth/2 - 90, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100, 20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 15, displayHeight/3);
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });
  }
}
