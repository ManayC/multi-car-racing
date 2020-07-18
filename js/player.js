class Player{
    constructor(){

        this.index=null
        this.name=null
        this.distance=0

    }
getCount(){

var playerCountref=database.ref("playerCount");
playerCountref.on("value",function(data){

    playerCount=data.val();
})

}
update(){
    var playerIndex="Players/player"+playerCount;
database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance
})}
updateCount(count){
    database.ref("/").update({
        playerCount:count
    })

}
static getPlayerInfo(){

    var playerInforef=database.ref("Players")
    playerInforef.on("value",(data)=>{
        allPlayers=data.val();
        })
}



}