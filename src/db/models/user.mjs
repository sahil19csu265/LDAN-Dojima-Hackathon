import mongoose from '../connect.mjs';
import CONFIG from'../../utils/config.mjs';
const SCHEMAS = CONFIG.SCHEMAS;
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.SchemaTypes;

const userSchema = new Schema(
  {
    emailid: { type: SchemaTypes.String, required: true, unique: true },
    password: { type: SchemaTypes.String, required: true, min: 3, max: 25 },
    walletAddress: { type: SchemaTypes.String, required: true },
    role: { type: SchemaTypes.String, required: true },
  },
  { timestamps: true }
);
const UserModel = mongoose.model(SCHEMAS.USERS, userSchema);
export default UserModel;
