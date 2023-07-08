import express from 'express';
import { saveSentEmails, getEmails,moveEmailsToBin,toggleStarredEmails,deleteEmails } from '../controller/email-controller.js';


const routes =express.Router();



routes.post('/save', saveSentEmails);

routes.get('/emails/:type',getEmails);

routes.post('/save-draft',saveSentEmails);

routes.post('/bin',moveEmailsToBin);

routes.post('/starred',toggleStarredEmails);

routes.delete('/delete',deleteEmails);





export default routes;