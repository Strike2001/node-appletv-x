/// <reference types="node" />
export declare class Credentials {
    uniqueIdentifier: string;
    identifier: Buffer;
    pairingId: string;
    publicKey: Buffer;
    encryptionKey: Buffer;
    readKey: Buffer;
    writeKey: Buffer;
    private encryptCount;
    private decryptCount;
    constructor(uniqueIdentifier: string, identifier: Buffer, pairingId: string, publicKey: Buffer, encryptionKey: Buffer);
    /**
    * Parse a credentials string into a Credentials object.
    * @param text  The credentials string.
    * @returns A credentials object.
    */
    static parse(text: string): Credentials;
    /**
    * Returns a string representation of a Credentials object.
    * @returns A string representation of a Credentials object.
    */
    toString(): string;
    encrypt(message: Buffer): Buffer;
    decrypt(message: Buffer): Buffer;
}
