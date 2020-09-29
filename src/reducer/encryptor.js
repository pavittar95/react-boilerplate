import createEncryptor from "redux-persist-transform-encrypt";

export const encryptor = createEncryptor({
  secretKey: "my-super-secret-key",
});
