import express from 'express';
import initApp from './src/app.router.js';
const app =express();
const port =5000;

initApp(app,express);


app.listen(process.env.PORT|| port,()=>{
    console.log(`Server is running on port ${port}`);
})









