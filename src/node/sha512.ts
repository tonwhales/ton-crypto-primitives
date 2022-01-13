import crypto from 'crypto';

export async function sha512(source: Buffer | string): Promise<Buffer> {
    return crypto.createHash('sha512').update(source).digest();
}