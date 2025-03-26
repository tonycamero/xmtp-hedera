export const encodeMessage = (msg: string): Uint8Array =>
  new TextEncoder().encode(msg)

export const decodeMessage = (bytes: Uint8Array): string =>
  new TextDecoder().decode(bytes)
