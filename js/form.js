class Form{
    constructor(){

        this.input=createInput("Enter your Name");
        this.button=createButton("click to start");
        this.greeting=createElement("h3")
        this.title=createElement("h1");
 }
hide(){

this.input.hide()
this.button.hide()
this.greeting.hide()
this.title.hide()

}

display(){

this.title.html("Multiplayer Car Racing")
this.title.position(150,20);

this.input.position(200,185);


this.button.position(190,185);


this.button.mousePressed(()=>{
this.input.hide();
this.button.hide(); 

player.name=this.input.value();
playerCount=playerCount+1;
player.index=playerCount
player.update();
player.updateCount(playerCount);
this.greeting.position(200,185)
this.greeting.html("hellow"+player.name);
})




}
}