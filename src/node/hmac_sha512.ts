import crypto from 'crypto';

export async function hmac_sha512(key: string | Buffer, data: string | Buffer): Promise<Buffer> {
    let keyBuffer: Buffer = typeof key === 'string' ? Buffer.from(key, 'utf-8') : key;
    let dataBuffer: Buffer = typeof data === 'string' ? Buffer.from(data, 'utf-8') : data;
    return crypto.createHmac('sha512', keyBuffer)
        .update(dataBuffer)
        .digest();
}