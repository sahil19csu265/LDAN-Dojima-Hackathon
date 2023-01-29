import mongoose from '../connect.mjs';
import CONFIG from'../../utils/config.mjs';
const SCHEMAS = CONFIG.SCHEMAS;
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.SchemaTypes;

const correctionSchema = new Schema(
  {
    walletAddress : { type: SchemaTypes.String, required: true},
    tokenID : { type: SchemaTypes.String, required: true},
    name : { type: SchemaTypes.String, required: true},
    description : { type: SchemaTypes.String, required: true },
  },
  { timestamps: true }
);
const correctionModel = mongoose.model(SCHEMAS.CORRECTION_REQUEST, correctionSchema);
export default correctionModel;
