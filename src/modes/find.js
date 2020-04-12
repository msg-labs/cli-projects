const { promisify } = require( 'util' );
const exec = promisify( require( 'child_process' ).exec );


// Returns the current directory path without the trailing /.git folder
const removeGitDir = directory =>
    directory.slice( 0, directory.indexOf( '/.git' ) );


const find = async path => {
    const command = `find ${ path } -type d -name ".git" -print 2>/dev/null`;
    const { stdout } = await exec( command );
    const branches = stdout
        .split( '\n' )
        .map( removeGitDir )
        .filter( line => !!line );

    return branches;
};

module.exports = find;
