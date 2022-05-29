var direction = 'right';

function move(){
    var step=10; 

    var x=document.getElementById('i1').offsetLeft;
    if(x >= window.screen.width -50){
        dir = 'left';
        document.getElementById('i1').src = "/images/pirate_ship2.png";

    }
    if(x <= 50){
        dir = 'right';
        document.getElementById('i1').src = "/images/pirate_ship.png";

    }

    if(dir=='right'){
        x= x +step;
    }
    else {
        x=x - step;
    }
    document.getElementById('i1').style.left = x + "px";
}

function start(){
    window.setInterval(move, 100);
}