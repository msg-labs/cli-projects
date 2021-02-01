const fs = require( 'fs' ).promises;
const path = require( 'path' );


const IGNORED_DIRECTORIES = [
    'node_modules',
    '.git'
];

const isGit = descriptors =>
    descriptors.map( d => d.name )
        .includes( '.git' );

const isDir = descriptor => descriptor.isDirectory();

const isIgnored = descriptor =>
    !IGNORED_DIRECTORIES.includes( descriptor.name );

const find = async dir => {
    const result = await fs.readdir( dir, { withFileTypes: true } );

    const cleanPaths = result
        .filter( isDir )
        .filter( isIgnored );

    if ( isGit( result ) ) {
        return dir;
    }

    const folders = await Promise.all( cleanPaths.map( folder =>
        find( path.join( dir, folder.name ) ) ) );

    return folders.flat();
};


module.exports = find;
