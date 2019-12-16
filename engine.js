
var getContext = function() {
    return document.getElementById('the_canvas').getContext('2d');
}

var im_cache = {};

let getImage = async function(name) {
    if( im_cache[name] ) {
        return im_cache[name];
    } else {
        return fetch(name + '.png')
            .then( response => response.blob() )
            .then( blob => {
                let im = new Image;
                im.src = (URL.createObjectURL( blob ));
                im_cache[name] = im;
                return im;
            });
    }
}

let left = () => {
    console.log("left");
};

let right = () => {
    console.log("right");
};

let down = () => {
    console.log("down");
};

let up = async () => {
    console.log("up");
    getImage('haus').then(
        im => getContext().drawImage(im,0,0)
    );
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
    
    console.log("Loaded.")
    
});