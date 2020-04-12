const os = require( 'os' );
const path = require( 'path' );
const fs = require( 'fs' ).promises;


const tmpFile = path.join( os.tmpdir(), 'msg-cli-projects-target' );

const log = data => fs.writeFile( tmpFile, data ? data : '' );


module.exports = log;
