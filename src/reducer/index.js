import storage from "redux-persist/lib/storage";
import { persistCombineReducers } from "redux-persist";
import { connectRouter } from "connected-react-router";
import user from "./modules/user";
import history from "../store/history";
import { encryptor } from "./encryptor";

const persistConfig = {
  key: "spartan-cms",
  storage: storage,
  transforms: [encryptor],
  blacklist: ["router"],
};

export default persistCombineReducers(persistConfig, {
  router: connectRouter(history),
  user,
});
