const path = require( 'path' );
const prompt = require( '@msg-labs/cli-prompt-list' );

const modes = require( './src/modes' );
const cli = require( './src/ui/cli.js' );


cli.parse( process.argv )

const searchOptions = {
    input: cli.search,
    limit: cli.limit
};

modes[ cli.mode ](path.join( cli.directory ))
    .then( projects => prompt(
        projects,
        'Project name > ',
        e => e,
        searchOptions
    ) )
    .then( response => console.dir(response ) );
