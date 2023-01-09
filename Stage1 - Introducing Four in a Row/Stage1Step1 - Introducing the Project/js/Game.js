class Game {
    constructor(){
        this.board = new Board;
        this.player = this.createPlayers();
        this.ready = false;
    }
    /** 
 * Creates two player objects
 * @return  {Array}    An array of two Player objects.
 */
    createPlayers(){
        const players = [new Player ('Player 1', 1, '#e15258', false), 
                    new Player('Player 2', 2, '#e15258')];
        return players;
    }
    /**
     * Gets game ready
     */
    startGame(){
    
    }
}



