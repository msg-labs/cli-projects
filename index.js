#!/usr/bin/env node

const path = require( 'path' );
const prompt = require( '@msg-labs/cli-prompt-list' );

const modes = require( './src/modes' );
const cli = require( './src/ui/cli.js' );
const log = require( './src/log.js' );


cli.parse( process.argv );

const options = cli.opts();

const searchOptions = {
    input: options.search,
    limit: options.limit
};

modes[ options.mode ]( path.join( options.directory ) )
    .then( projects => prompt(
        projects,
        'Project name > ',
        e => e,
        searchOptions
    ) )
    .then( log );
