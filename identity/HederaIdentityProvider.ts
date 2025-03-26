export class HederaIdentityProvider {
  constructor(privateAccount: any) {
    this.key = privateAccount
  }

  async getAddress(): Promise<string> {
    return this.key.publicKey.toString()
  }

  async signMessage(message: Uint8Array): Promise<Uint8Array> {
    return this.key.sign(message)
  }

  async verifySignature(message: Uint8Array, signature: Uint8Array): Promise<boolean> {
    return this.key.publicKey.verify(message, signature)
  }
}
