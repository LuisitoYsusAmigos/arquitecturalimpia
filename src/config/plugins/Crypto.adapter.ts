import * as crypto from 'crypto';

export class CryptoAdapter {
    private secretKey: Buffer;
    private algorithm: string;
    private static readonly fixedIv = Buffer.alloc(16);

    constructor(secretKey: string) {
        this.secretKey = crypto.createHash('sha256').update(secretKey).digest();
        this.algorithm = 'aes-256-cbc';
    }

    encrypt(data: string): string {
        const cipher = crypto.createCipheriv(this.algorithm, this.secretKey, CryptoAdapter.fixedIv);
        let encrypted = cipher.update(data, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    decrypt(encryptedData: string): string {
        const decipher = crypto.createDecipheriv(this.algorithm, this.secretKey, CryptoAdapter.fixedIv);
        let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}


