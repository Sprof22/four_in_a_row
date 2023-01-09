class Token {
    constructor(){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`
        this.dropped= false;
    }

    drawHTMLToken(){
        const Token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.background.color = this.owner.color;
    }

}

