require('dotenv').config();

import { Recipe } from "./Recipe";
import { World } from './World';
import { readFileSync } from "fs";
const http = require('http')

let world = new World();

let header = (res:any, title:string) => {
    res.write("<!DOCTYPE html>\n");
    res.write("<html>\n");
    res.write("<head>\n");
    res.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>\n')
    res.write('<script src="/engine.js" type="text/javascript"></script>\n');
    res.write('<link rel="stylesheet" type="text/css" href="styles.css"/>')
    res.write("</head>\n");
    res.write("<body>\n");
}

let ui = (res:any) => {
    res.write('<canvas width="800" height="600"></canvas>');
}

let footer = (res:any) => {
    res.write("</body>\n");
    res.write("</html>\n");
}

(async () => {
    await world.loadDirAlias( process.cwd()+'/assets/places/', "home");
    await world.loadDirAlias( process.cwd()+'/assets/recipes/', "cookbook");
    await world.loadDirAlias( process.cwd()+'/assets/archetypes/', "grimoire");
    await world.loadDirAlias( process.cwd()+'/gfx/','icons');
    //console.dir(world);
    http.createServer(async function (req, res) {
        if( req.url.match(/place\//g) ){
            let place = req.url.replace(/\/place\/([^\/]+).*/g, '$1');            
            res.write( JSON.stringify(await world.findPlace(place),null,4) );
        } else if( req.url.match(/recipe\//g)) {
            let recipe = req.url.replace(/\/recipe\/([^\/]+).*/g, '$1');
            res.write( JSON.stringify(await world.findRecipe(recipe),null,4));
        } else if ( req.url.match( /\.png$/g )) {
            res.write( await world.loadImage(req.url) ) ;
        } else if( req.url.match( /engine\.js$/g )) {
            res.write( readFileSync('./engine.js'));
        } else if( req.url.match( /styles\.css$/g )) {
            res.write( readFileSync('./styles.css'));
        } else {
            header(res, "Ivy World");
            ui(res);
            footer(res);
        }
        res.end(); //end the response
        
        
      }).listen(process.env.PORT); 
})();




let game_objects = {
    mr_sloth: {

    },
    glasses: {

    },
    mommys_phone: {
        
    }
};

let locations = {
    porch: {

    },
    yard: {

    },
    kitchen: {

    },
    garage: {

    },
    ivys_room: {

    },
    ivys_closet: {

    }
};

