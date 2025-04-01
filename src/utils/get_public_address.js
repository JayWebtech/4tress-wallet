import { ec } from 'starknet';
import { getPrivateKeyFromStorage } from './get_private_key_from_storage';

export const getPublicAddress = async () => {
    const privateKey = await getPrivateKeyFromStorage();
    const starkKeyPub = ec.starkCurve.getStarkKey(privateKey);
    return starkKeyPub
}

