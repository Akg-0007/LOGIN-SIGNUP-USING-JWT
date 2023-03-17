import express from 'express';
import { adduser,logusers,getusers } from '../controllers/user-controller.js';
import auth from '../middleware/auth.js';
const router=express.Router();
router.post('/add',adduser);
router.post('/login',logusers);

// router.use(auth)
router.get('/all',auth,getusers)


export default router;