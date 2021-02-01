const { promisify } = require( 'util' );
const exec = promisify( require( 'child_process' ).exec );


// Returns the current directory path without the trailing /.git folder
const START = 0;
const removeGitDir = directory =>
    directory.slice( START, directory.indexOf( '/.git' ) );


const find = async path => {
    const command = `find ${ path } -type d -name ".git" -print 2>/dev/null`;
    let stdout = '';

    try {
        ( { stdout } = await exec( command ) );
    } catch ( error ) {
        if ( error.stdout.length ) {
            ( { stdout } = error );
        } else {
            throw error;
        }
    }

    const branches = stdout
        .split( '\n' )
        .map( removeGitDir )
        .filter( line => Boolean( line.replace( /\s/ug, '' ) ) );

    return branches;
};

module.exports = find;
