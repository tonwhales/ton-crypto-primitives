import crypto from 'crypto';

export async function sha256(source: Buffer | string): Promise<Buffer> {
    return crypto.createHash('sha256').update(source).digest();
}