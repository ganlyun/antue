const http = require('http')
const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '../site/dist')
const host = process.env.HOST || '0.0.0.0'
const port = Number(process.env.PORT || 8080)

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.map': 'application/json; charset=utf-8'
}

const safeJoin = (base, requestPath) => {
  const safePath = path.normalize(requestPath).replace(/^(\.\.(\/|\\|$))+/, '')
  return path.join(base, safePath)
}

const readFile = (filePath) =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })

http
  .createServer(async (req, res) => {
    const urlPath = (req.url || '/').split('?')[0]
    const requestPath = urlPath === '/' ? '/index.html' : urlPath
    const filePath = safeJoin(root, requestPath)

    try {
      const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
        const indexPath = path.join(filePath, 'index.html')
        const data = await readFile(indexPath)
        res.writeHead(200, { 'Content-Type': mime['.html'] })
        res.end(data)
        return
      }
      const data = await readFile(filePath)
      res.writeHead(200, { 'Content-Type': mime[path.extname(filePath)] || 'application/octet-stream' })
      res.end(data)
    } catch (e) {
      try {
        const data = await readFile(path.join(root, 'index.html'))
        res.writeHead(200, { 'Content-Type': mime['.html'] })
        res.end(data)
      } catch (e2) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
        res.end('Not Found')
      }
    }
  })
  .listen(port, host, () => {
    process.stdout.write(`Site dist server: http://localhost:${port}/\n`)
  })

