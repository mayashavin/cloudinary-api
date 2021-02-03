import { Writable } from 'stream'

export class Chunkable extends Writable {
  buffer: Buffer
  chunkSize: number
  active: boolean

  constructor(options) {
    super(options)

    this.buffer = Buffer.alloc(0)
    this.chunkSize = options.chunkSize || 20000000
    this.active = true
    this.on('finish', () => {
      if (this.active) {
        this.emit('ready', this.buffer, true, function () {
        });
      }
    });
  }

  _write(chunk, encoding, next: Function) {
    if (!this.active) { next() }

    const length = this.buffer.length + chunk.length

    if (length <= this.chunkSize) {
      this.buffer = Buffer.concat([this.buffer, chunk], length)
      next()
    } else {
      const gap = this.chunkSize - this.buffer.length

      this.buffer = Buffer.concat([this.buffer, chunk.slice(0, gap)], this.chunkSize)

      this.emit('ready', this.buffer, false, (status: boolean) => {
        this.active = status

        if (!this.active) return

        this.buffer = chunk.slice(gap)
        next()
      })
    }
    
  }
}