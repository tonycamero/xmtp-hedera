# XIP-Hedera-Identity.md

**Proposal: Add ED25519 Identity Provider Support to XMTP Protocol**

---

## 🎯 Summary
This proposal introduces support for non-EVM, ED25519-based identity providers within the XMTP protocol — beginning with Hedera-native wallets. It enables seamless encrypted messaging across the Hedera ecosystem, supporting wallets like Blade, HashPack, EarthID, and DID:hedera-based identity formats.

---

## 🔍 Motivation

XMTP currently supports `secp256k1`-based EVM wallets for identity and inbox derivation. This excludes high-performance, regulated ecosystems like Hedera, which use ED25519 as the cryptographic standard.

Adding ED25519 compatibility will:
- Unlock XMTP for Hedera-native wallets (Blade, HashPack, EarthID)
- Enable encrypted wallet-native messaging in Hedera dApps
- Support adoption across non-EVM chains with ED25519 wallets
- Strengthen DID adoption (e.g., DID:hedera)

---

## 🔐 Specification

### ✅ New Identity Provider Class: `ED25519IdentityProvider`
```ts
interface IdentityProvider {
  getAddress(): Promise<string>
  signMessage(message: Uint8Array): Promise<Uint8Array>
  verifySignature(message: Uint8Array, signature: Uint8Array): Promise<boolean>
}
```

### 📤 Inbox Association Changes
- XMTP inbox derivation will support address types:
  - `address_type: 'secp256k1'` (default)
  - `address_type: 'ed25519'`
- Optional resolver format: `did:hedera:{accountId}`

### 🔄 Example Usage
```ts
const hederaProvider = new ED25519IdentityProvider(hederaWallet)
const xmtp = await Client.create(hederaProvider)
```

---

## 📦 Implementation Notes

- Initial implementation lives at [tonycamero/xmtp-hedera](https://github.com/tonycamero/xmtp-hedera)
- Includes:
  - IdentityProvider wrapper for Hedera keys
  - ED25519 signing & verifying utils
  - DID formatting support
- Design aligns with `Client.create()` expectations and modularity

---

## 🤝 Collaborators & Support
- Scend / CraftTrust (Tony Camero)
- Kabila.app
- EarthID
- Blade Wallet
- HashPack
- Dropp
- HH DComms (HBAR Foundry project)

---

## ✅ Benefits
- Expand XMTP to new ecosystems
- Decentralized, DID-native inbox architecture
- Broader user access for decentralized messaging

---

## 🚧 Next Steps
- Community feedback on format and plugin architecture
- Determine core inclusion vs plugin model for identity providers
- Align DID support roadmap with XMTP team

---

*Let’s bridge XMTP to the rest of the decentralized world — starting with Hedera.*