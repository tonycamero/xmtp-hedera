# XMTP x Hedera: Identity Provider Integration

This is an early-stage prototype for enabling ED25519-based identity support within XMTP,
built around the Hedera ecosystem. It's part of the broader Hedera Hashgraph dComms infrastructure, an effort explored in part by projects like Scend, Kabila, EarthID, Blade, HashPack, and others.

## Goals
- Add support for non-EVM wallet identities (Hedera) in XMTP
- Enable encrypted wallet-to-wallet messaging on Hedera
- Provide optional DID resolver for DID:hedera:walletAddress

## Structure
- identity/ → Core provider logic (signing + verifying)
- utils/ → Message formatting helpers
- examples/ → Demo flows

## Contributors
- Tony Camero (Scend / CraftTrust)
- [Open invite to Hedera & XMTP ecosystem devs]
