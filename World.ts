
import {
    readFileSync,
    Dirent, Dir, readdirSync
} from 'fs';
import * as path from 'path';


export class World {
    private places: any;

    constructor() {
        this.places = {};
    }

    /** Load the contents of a directory and return it as an array. */
    private async loadDir( path:string ): Promise< any > {
        let dir = readdirSync( path );
        let files:any = {};
        await Promise.all(dir.map( 
            async (ent) => {
                if( ent.match("\.json$") ) {
                    files[ent] = JSON.parse( '' + readFileSync( path + ent) )
                } else if ( ent.match("\.pov$")) {
                    
                } else {
                    files[ent] = await this.loadDir( path + ent + '/' );
                }
            }
        ));
        return files;
    }

    /** Load a directory, all sub-directories and JSON content */
    public async load( path:string, alias:string ): Promise<any> {
        // lazy loaded
        this.places[alias] = await this.loadDir( path );
    }
}