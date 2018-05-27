import express from 'express';
import path from 'path';
// import helmet from 'helmet';

let app = express();

app.get( '/', ( req, res ) => {
    res.sendFile(path.join(__dirname+'/views/index.html'));
});


let server = app.listen( 8000, () => {
    //console.log( `Node: ${process.version} Environment: ${process.env.NODE_ENV || app.settings.env} Version: ${app.get( 'version' )}` );
    console.log( `Server listening on 8000` );
});
