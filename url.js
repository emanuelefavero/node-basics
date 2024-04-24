import url from 'url'

const urlString = 'https:/google.com/api/search?q=hello+world'

// * URL Object
const urlObject = new URL(urlString)
const {
  href,
  origin,
  protocol,
  username,
  password,
  host,
  hostname,
  port,
  pathname,
  search,
  searchParams,
  hash,
} = urlObject

console.log(href) // https:/google.com/api/search?q=hello+world
console.log(origin) // https:/google.com
console.log(protocol) // https:
console.log(username) // ''
console.log(password) // ''
console.log(host) // google.com
console.log(hostname) // google.com
console.log(port) // ''
console.log(pathname) // /api/search
console.log(search) // ?q=hello+world
console.log(searchParams) // URLSearchParams { 'q' => 'hello world' }
console.log(searchParams.toString()) // q=hello+world
console.log(searchParams.get('q')) // hello world
console.log(hash) // ''

// * format URL - takes a URL object and returns a formatted URL string
const formattedUrl = url.format(urlObject)
console.log(formattedUrl) // https:/google.com/api/search?q=hello+world

// * import.meta.url - return the file URL of the current module
console.log(import.meta.url) // file:///Users/username/path-to-file/api.js
console.log(url.fileURLToPath(import.meta.url)) // /Users/username/path-to-file/api.js

// * URLSearchParams
const params = new URLSearchParams(search)
console.log(params.get('q')) // hello world
console.log(params.has('q')) // true
params.append('limit', '5')
// params.delete('q')
console.log(params.toString()) // q=hello+world&limit=5
