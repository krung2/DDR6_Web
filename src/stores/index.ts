import MainStore from "./Main/MainStore";
import TokenStore from './Token/TokenStore'

const stores = {
  MainStore: new MainStore(),
  TokenStore: new TokenStore(),
};

export default stores;