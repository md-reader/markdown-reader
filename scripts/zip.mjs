import fs from 'fs/promises'
import archiver from 'archiver'
import { url, log, newVersion } from './utils.mjs'

const entryDir = url('../extension/')
const outputDir = url('../dist/')
const extName = `markdown-reader-${newVersion}.zip`

try {
  await fs.access(entryDir)
  await fs.access(outputDir).catch(() => fs.mkdir(outputDir))

  const fh = await fs.open(url(extName, outputDir), 'w+')
  const output = fh.createWriteStream()

  const archive = archiver('zip', {
    zlib: { level: 9 },
  })

  archive.on('error', log.red)
  output.on('close', () =>
    log.green(
      `📦[output]: ${outputDir + extName} [${archive.pointer()} bytes]`,
    ),
  )

  archive.pipe(output)
  archive.directory(entryDir.pathname, false)
  archive.finalize()
} catch (err) {
  log.red(err)
  process.exit(1)
}
