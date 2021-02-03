import { Transform } from 'stream'

export class UploadStream extends Transform {
  boundary: Buffer
  constructor(boundary: Buffer) {
    super()
    this.boundary = boundary
  }

  _transform(data:Buffer, encoding: any, next: Function) {
    const buffer = Buffer.isBuffer(data) ? data : Buffer.from(data, encoding)

    this.push(buffer)
    next()
  }

  _flush(done:Function) {
    this.push(Buffer.from("\r\n", 'ascii'))
    this.push(this.boundary)

    return done()
  }
}