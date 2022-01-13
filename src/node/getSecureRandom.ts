import crypto from 'crypto';

export function getSecureRandomBytes(size: number): Buffer {
    return crypto.randomBytes(size);
}

export function getSecureRandomWords(size: number): Uint16Array {
    let res = new Uint16Array(size);
    crypto.randomFillSync(res);
    return res;
}