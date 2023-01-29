import express from 'express';
const router = express.Router();
import CONFIG from'../../utils/config.mjs';
const {MINT,TRANSFER,GET_TRANSFER_REQUEST,GET_CORRECTION_REQUEST,UPDATE_NFT} = CONFIG.ROUTES.ADMIN;
import ADMIN_CONT from '../../controllers/AdminController.mjs';
const  {mintNFT,transfer, getTransferRequests, getCorrectionRequests, update} = ADMIN_CONT;

router.use(MINT,mintNFT);
router.use(TRANSFER,transfer);
router.use(GET_TRANSFER_REQUEST,getTransferRequests);
router.use(GET_CORRECTION_REQUEST,getCorrectionRequests);
router.use(UPDATE_NFT,update);

export default router;