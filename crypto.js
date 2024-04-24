import crypto from 'crypto'

// * Create a hash - a hash is a fixed-length string of bytes that is unique to the input
const hash = crypto.createHash('sha256')
hash.update('Hello')
console.log(hash.digest('hex'))
// 185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969

// * Random Bytes
crypto.randomBytes(16, (err, buf) => {
  if (err) throw err
  console.log(buf.toString('hex')) // 3b9e7e7f8e6f8c2b6b1e3e7f8e6f8c2b
})

// * Encrypt and Decrypt Data
const algorithm = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const cipher = crypto.createCipheriv(algorithm, key, iv)
let encrypted = cipher.update('Hello', 'utf-8', 'hex')
encrypted += cipher.final('hex')
console.log(encrypted) // 74332dfb5f73569a25201fd0d0a08113

const decipher = crypto.createDecipheriv(algorithm, key, iv)
let decrypted = decipher.update(encrypted, 'hex', 'utf-8')
decrypted += decipher.final('utf-8')

console.log(decrypted) // Hello
