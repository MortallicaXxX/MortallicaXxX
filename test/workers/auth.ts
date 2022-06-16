import { sha256 } from "js-sha256";
import { expose } from '../../src/index';

expose({
  hashPassword(password, salt) {
    return sha256(password + salt)
  }
})
