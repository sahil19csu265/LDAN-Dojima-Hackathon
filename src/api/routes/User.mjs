import express from 'express';
const router = express.Router();
import CONFIG from'../../utils/config.mjs';
const {REGISTER,LOGIN,ADD_TRANSFER_REQUEST,ADD_CORRECTION_REQUEST, CREATE_WILL, VIEW_WILL} = CONFIG.ROUTES.USER;
import USER_ROUTE from '../../controllers/UserController.mjs';
const { register,login,addTransferRequest, addCorrectionRequest, createWill, viewWill} = USER_ROUTE;

router.use(REGISTER,register);
router.use(LOGIN,login);
router.use(ADD_TRANSFER_REQUEST,addTransferRequest);
router.use(ADD_CORRECTION_REQUEST,addCorrectionRequest);
router.use(CREATE_WILL,createWill);
router.use(VIEW_WILL,viewWill);

export default router;