import { getPrivateKeyFromPassword } from "./get_private_key_from_password";

export const getPrivateKeyFromStorage = async () => {
    const password = localStorage.getItem("hashed_pwd");
    const key = await getPrivateKeyFromPassword(password);
    return key;
}