import mongoose from '../connect.mjs';
import CONFIG from'../../utils/config.mjs';
const SCHEMAS = CONFIG.SCHEMAS;
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.SchemaTypes;

const transferSchema = new Schema(
  {
    senderAddress: { type: SchemaTypes.String, required: true},
    receiverAddress: { type: SchemaTypes.String, required: true},
    tokenID: { type: SchemaTypes.String, required: true },
  },
  { timestamps: true }
);
const transferModel = mongoose.model(SCHEMAS.TRANSFER_REQUEST, transferSchema);
export default transferModel;
