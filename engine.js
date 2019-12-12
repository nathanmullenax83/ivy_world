

let left = () => {
    console.log("left");
};

let right = () => {
    console.log("right");
};

let down = () => {
    console.log("down");
};

let up = () => {
    console.log("up");
};



$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            left();
        break;

        case 38: // up
            up();
        break;

        case 39: // right
            right();
        break;

        case 40: // down
            down();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

$(document).load( (e)=> {
    
});