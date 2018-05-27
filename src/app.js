import express from 'express';
// import helmet from 'helmet';

let app = express();

app.get( '/', ( req, res ) => {
    res.json( 'Assalamualaikum' );
});


let server = app.listen( 8000, () => {
    //console.log( `Node: ${process.version} Environment: ${process.env.NODE_ENV || app.settings.env} Version: ${app.get( 'version' )}` );
    console.log( `Server listening on 8000` );
});
