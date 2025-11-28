const crypto = require('node:crypto');

console.log('Polyfill loaded: Patching crypto module');

if (!crypto.getRandomValues && crypto.webcrypto) {
  console.log('Patching crypto.getRandomValues');
  crypto.getRandomValues = crypto.webcrypto.getRandomValues.bind(crypto.webcrypto);
}

if (!globalThis.crypto) {
  console.log('Polyfilling globalThis.crypto');
  globalThis.crypto = crypto.webcrypto;
}
