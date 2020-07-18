class Game{
    constructor(){}
    getState(){
        var gameStateref=database.ref("gameState")
        gameStateref.on("value",function(data){

            gameState=data.val();
        })
    }
    update(state){
        database.ref("/").update({

            gameState:state

        })
        
    }   
    start(){
        
        if(gameState===0){

            player=new Player();
            player.getCount();

            form=new Form();
            form.display();
        }
    }
    play(){

        form.hide()
        textSize(30)
        text("GET READY!",200,200)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
        var displayPosition=210;
        for(var plr in allPlayers){

            if(plr==="player"+player.index){

                fill ("red");

            }
            else{

                fill(0)

            }


        
        displayPosition=displayPosition+20
        textSize(20)
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
        
        }
        }
        if(keyDown(UP_ARROW)&& player.index !==null){
            player.distance=player.distance+50
            player.update();
        }
        
    }
}
