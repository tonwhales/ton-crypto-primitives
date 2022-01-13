export function getSecureRandomBytes(size: number): Buffer {
    return Buffer.from(window.crypto.getRandomValues(new Uint8Array(size)));
}

export function getSecureRandomWords(size: number): Uint16Array {
    return window.crypto.getRandomValues(new Uint16Array(size));
}