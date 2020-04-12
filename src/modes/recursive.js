const fs = require( 'fs' ).promises;
const path = require( 'path' );


const __ignore__ = [
    'node_modules',
    '.git'
];

const isGit = descriptors =>
    descriptors.map(d => d.name).includes( '.git' );

const isDir = descriptor => descriptor.isDirectory();

const isIgnored = descriptor => !__ignore__.includes( descriptor.name )

const find = async dir => {
    const result = await fs.readdir( dir, { withFileTypes: true } );

    const cleanPaths = result
        .filter( isDir )
        .filter( isIgnored );

    const _isGit = isGit( result );

    if ( _isGit ) {
        return dir;
    }

    const folders = await Promise.all( cleanPaths.map(
        result => find( path.join( dir, result.name ) )
    ) );

    return folders.flat();
};


module.exports = find;
