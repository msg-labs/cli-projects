const path = require( 'path' );
const os = require( 'os' );
const commander = require( 'commander' );

const {
    version, bin
} = require( path.join( '..', '..', 'package.json' ) );
const modes = require( '../modes' );
const program = new commander.Command();

const DEFAULT_LIMIT = 10;
const FIRST = 0;

const SEARCH_MODES = Object.keys( modes );
const DEFAULT_MODE = SEARCH_MODES[ FIRST ];

const getSearchMode = mode =>
    ( SEARCH_MODES.includes( mode ) ? mode : DEFAULT_MODE );

const basicGlobParser = glob => glob.replace( '~', os.homedir() );

program
    .name( Object.keys( bin )
        .shift() )
    .version( version )
    .arguments( '[search...]' )
    .action( ( search, env ) => {
        env.search = search.join( ' ' );
    } )
    .option( '-d, --directory [string]', 'uses the directory as base', basicGlobParser, os.homedir() )
    .option( '-m, --mode [string]', 'which search mode to use', getSearchMode, DEFAULT_MODE )
    .option( '-l, --limit [number]', 'limits the line outputs', Number.parseInt, DEFAULT_LIMIT );


module.exports = program;
