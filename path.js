import path from 'path'
import url from 'url'

const filePath = './dir1/dir2/test.txt'

// * PATH methods
console.log(path.basename(filePath)) // test.txt
console.log(path.dirname(filePath)) // ./dir1/dir2
console.log(path.extname(filePath)) // .txt
console.log(path.parse(filePath))
// { root: '', dir: './dir1/dir2', base: 'test.txt', ext: '.txt', name: 'test' }

// * SIMULATE __filename and __dirname in ES Modules
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__filename) // /Users/username/path-to-file/path.js
console.log(__dirname) // /Users/username/path-to-file

// * JOIN PATHS
const absolutePath = path.join(__dirname, 'dir1', 'dir2', 'test.txt')
console.log(absolutePath) // /Users/username/path-to-file/dir1/dir2/test.txt

// * RESOLVE PATHS - similar to join, but always returns an absolute path
const resolvedPath = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt')
console.log(resolvedPath) // /Users/username/path-to-file/dir1/dir2/test.txt
