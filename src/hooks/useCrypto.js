import CryptoJs from "crypto-js"

function useCrypto(){

const key = process.env.REACT_APP_SECRET_KEY;
if (!key) return '';

const decrypto = (data) => {
    const bytes = CryptoJs.AES.decrypt(data, key);
    const original = bytes.toString(CryptoJs.enc.Utf8)
    return original;

}

const encrypto = (data) => {
    const encrypted = CryptoJs.AES.encrypt(data, key).toString()
    return encrypted
}

return {decrypto, encrypto}; 
}

export default useCrypto;