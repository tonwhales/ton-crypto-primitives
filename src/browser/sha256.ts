export async function sha256(source: Buffer | string): Promise<Buffer> {
    if (typeof source === 'string') {
        return Buffer.from(await crypto.subtle.digest("SHA-256", Buffer.from(source, 'utf-8')));
    }
    return Buffer.from(await crypto.subtle.digest("SHA-256", source));
}