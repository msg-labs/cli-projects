require( 'util' );

jest.mock( 'util', () => ( {
    promisify: () => () => Promise.resolve( {
        stdout: `
/home/test/.nvm/.git
/home/test/github/msg-labs/npm-bump/.git
/home/test/github/msg-labs/cli-projects/.git
/home/test/github/msg-labs/eslint-config/.git
/home/test/github/msg-labs/git-branch/.git
/home/test/github/msg-labs/cli-prompt-list/.git
/home/test/github/msg-learning/open-library/.git
/home/test/.vim/plugged/vim-styled-components/.git
/home/test/.vim/plugged/vim-javascript/.git
/home/test/.vim/plugged/vim-airline-themes/.git
/home/test/.vim/plugged/vim-devicons/.git
/home/test/.vim/plugged/ctrlp.vim/.git
/home/test/.vim/plugged/vim-side-search/.git
/home/test/.vim/plugged/vim-airline/.git
/home/test/.vim/plugged/vim-fugitive/.git
/home/test/.vim/plugged/vim-gitgutter/.git
/home/test/.vim/plugged/vim-tomorrow-theme/.git
/home/test/.vim/plugged/vim-jsx/.git
    `
    } )
} ) );

const find = require( './find.js' );

describe( 'modes/find', () => {

    it( 'removes any empty line from the result', async () => {

        expect.assertions( 1 );

        const branches = await find( '/test' );

        expect( branches ).toStrictEqual( expect.not.arrayContaining( [
            expect.stringMatching( /\s/g )
        ] ) );

    } );

    it( 'removes the .git directory', async () => {

        expect.assertions( 1 );

        const branches = await find( '/test' );

        expect( branches ).toStrictEqual( expect.not.arrayContaining( [
            expect.stringMatching( /\.git/ )
        ] ) );

    } );

} );

