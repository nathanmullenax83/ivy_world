require('dotenv').config();

import { Recipe } from "./Recipe";
import { World } from './World';

let world = new World();

(async () => {
    await world.load( process.cwd()+'/assets/places/', "home");
    console.dir(world);
})();


let recipes = [
    new Recipe("Quesitos"),
    new Recipe("Cheesecake"),
    new Recipe("Mississippi Mud Pi"),
    new Recipe("French Toast"),
    new Recipe("Creamed Eggs"),
    new Recipe("Puff Pastry"),
    new Recipe("Snickerdoodles")
];

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

let start = "ivys_room";
