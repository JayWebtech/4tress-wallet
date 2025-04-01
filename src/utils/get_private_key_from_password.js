import * as passworder from '@metamask/browser-passworder';
import toast from 'react-hot-toast';

export const getPrivateKeyFromPassword = async (password) => {
    try {
        const rawData = localStorage.getItem("4tress_credentials");
        const decryptedKey = await passworder.decrypt(password, JSON.parse(rawData));
        return decryptedKey;
    } catch (error) {
        if (error.message.includes("Incorrect password")) {
            toast.error("Incorrect password. Please try again.");
        } else {
            toast.error("An error occured please try again.");
        }
    }
}