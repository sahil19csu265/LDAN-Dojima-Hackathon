import Dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import CONFIG from './utils/config.mjs';
import ADMIN_ROUTE from './api/routes/Admin.mjs';
import USER_ROUTE from './api/routes/User.mjs';
const {ROOT} = CONFIG.ROUTES;

Dotenv.config();
const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(express.json());

app.use(ROOT+"admin",ADMIN_ROUTE);
app.use(ROOT+"user",USER_ROUTE);

const server = app.listen(process.env.PORT || 8080,(err)=>{
  if(err){
    console.log(`Failed to start Server`);
  }
  else{
    console.log(`Server started on port ${server.address().port}`);
  }
})



