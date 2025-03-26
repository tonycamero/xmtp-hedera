import { HederaIdentityProvider } from '../identity/HederaIdentityProvider'
import { encodeMessage } from '../utils/ed25519-signing'

// Simulated Hedera keypair (in prod: use EarthID or Blade)
const privateKey = {
  publicKey: {
    toString: () => 'hedera-public-key',
    verify: (msg: Uint8Array, sig: Uint8Array) => true
  },
  sign: async (msg: Uint8Array) => new Uint8Array([1,2,3])
}

const provider = new HederaIdentityProvider(privateKey)

const msg = encodeMessage('gm HH DComms')
const sig = await provider.signMessage(msg)

console.log('Signed:', sig.toString())
console.log('Verified:', await provider.verifySignature(msg, sig))
