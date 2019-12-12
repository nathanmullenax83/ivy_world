
import {
    readFileSync,
    Dirent, Dir, readdirSync
} from 'fs';
import * as path from 'path';


export class World {
    private places: any;
    private recipes: any;
    private archetypes: any;
    private objects: any;
    private images: any;
    private quests: any;

    constructor() {
        this.places = {};
        this.recipes = {};
        this.archetypes = {};
        this.objects = {};
        this.images = {};
        this.quests = {};
    }

    public async loadImage( path:string ): Promise<any> {
        return this.images[path];
    }

    public async loadCSV(path: string): Promise<any> {

    }

    /** Load the contents of a directory and return it as an array. */
    private async loadDir(path: string): Promise<any> {
        let dir = readdirSync(path);
        let files: any = {};
        await Promise.all(dir.map(
            async (ent) => {
                if (ent.match("\.json$")) {
                    try {
                        let name = ent.slice( 0, ent.length-5);
                        let json = JSON.parse('' + readFileSync(path + ent));
                        switch( json.type ) {
                            case "object":
                                this.objects[name] = json;
                                break;
                            case "place":
                                this.places[name] = json;
                                console.log("Loaded place: " + ent);
                                break;
                            case "recipe":
                                this.recipes[name] = json;
                                break;
                            case "archetype":
                                this.archetypes[name] = json;
                                break;
                            case "quests":
                                this.quests[name] = json;
                                break;
                            default:
                                throw new Error("Unknown JSON type: " + ent);
                        }
                    } catch (e) {
                        console.log("JSON parsing failed for " + ent);
                        files[ent] = { error: "Couldn't parse JSON for " + ent };
                    }
                } else if (ent.match("\.svg$")) {
                    // ignore SVGs
                } else if (ent.match("\.pov$")) {

                } else if (ent.match("\.csv")) {
                    files[ent] = await this.loadCSV(path + ent);
                } else if (ent.match("\.png$") || ent.match("\.jpe?g$")) {
                    //files[ent] = readFileSync(path + ent);
                    this.images['/' + ent] = readFileSync( path + ent );  
                } else {
                    files[ent] = await this.loadDir(path + ent + '/');
                    files[ent]['type'] = 'dir';
                }
            }
        ));
        files['type'] == 'dir';
        return files;
    }

    /** Load a directory, all sub-directories and JSON content */
    public async loadDirAlias(path: string, alias: string): Promise<any> {
        // lazy loaded
        this.places[alias] = await this.loadDir(path);
        this.places[alias]['type'] = 'dir';
    }

    /** Find a place by name: looks in subdirectories. **/
    public async findPlace(name: string): Promise<any> {
        return this.places[name];
    }

    public async findRecipe( name:string ): Promise<any> {
        return this.recipes[name];
    }

    

    


    
}