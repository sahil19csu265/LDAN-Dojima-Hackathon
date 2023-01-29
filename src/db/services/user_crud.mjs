import UserModel from '../models/user.mjs';
import encryption from '../../utils/encrypt.mjs';

export default {
  
  register(userObject) {
    userObject.password = encryption.generateHash(userObject.password);
    let promise = UserModel.create(userObject);
    return promise;
  },

  async login({ email, pwd }) {
    const doc = await UserModel.findOne({ emailid: email });
    if (doc) {
      if (encryption.compareHash(doc.password, pwd)) {
        return doc;
      } else {
        return null;
      }
    }
    return null;
  },

};
