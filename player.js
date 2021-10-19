class Player{
    
    constructor(){
       this.index=null;
       this.name=null;
       this.distance=0;
       this.xPos=0;

    }


     getCount(){

        var playerCountRef= database.ref('playerCount');
        playerCountRef.on("value", function(data){
        playerCount= data.val();
            
          
        });
        
      }


     updateCount(count){
           database.ref('/').update({
                playerCount:count
           })
     }


     update(){

          var playerIndex="player"+player.index;
          database.ref(playerIndex).update({
               name:this.name,
               distance:this.distance,
               xPos:this.xPos
          });
          
     }

     static getPlayerInfo(){
          
          database.ref('/').on("value",function(data){

                allPlayers=data.val();

          });

         
     }




}