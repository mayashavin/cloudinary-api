import { createReadStream, statSync } from 'fs'
import fetch from 'node-fetch'
// import Q from 'q'
import { request } from 'https'
import { basename } from 'path'
import FormData from 'form-data'
import { Transform } from 'stream'
// import { Asset } from "@cld-apis/types";
import { buildApiUrl, createSignature, getRandomId, toRequestParams, toRequestParamString, hashData, encodeWithBoundary } from "../utils";
import { Chunkable } from './Chunkable';
import { USER_AGENT } from '../constants';

// export const create = () => {
//   const formData = new Form
//   formData.append("file", file);
//     formData.append("api_key", "1234");
//     formData.append("eager", "w_400,h_300,c_pad|w_260,h_200,c_crop");
//     formData.append("public_id", "sample_image");
//     formData.append("timestamp", "1315060510");
//     formData.append("signature", "bfd09f95f331f558cbd1320e67aa8d488770583e");
// }


export const upload = async (file, cloudConfig, assetConfig):Promise<any> => {
  if (!file) return

  // const snakeCase = require('lodash.snakecase')
  const options = {
    ...cloudConfig,
    ...assetConfig
  }

  // 1. Create params
  const params = toRequestParams(options)
  // return isRemoteUrl(file) ? [params, { file: file }] : [params, {}, file];

  // 2. Create API Url
  const url = buildApiUrl(cloudConfig.cloudName, assetConfig.resourceType)

  // 3. Create Random public id????
  // const boundary = getRandomId(assetConfig.publicId)
  console.log(params)
  const formData = new FormData()

  for (let k in params) {
    const value = params[k]

    if (!value) continue

    formData.append(k, JSON.stringify(value))   
  }

  const headers = createHeaders(options, file)
  console.log(headers)

  const stream = createReadStream(file)

  formData.append('file', stream)

  console.log(formData.getHeaders())

  const result = await fetch(url, {
    method: 'POST',
    headers: {
      ...headers,
      ...formData.getHeaders
    },
    body: formData
  })

  console.log(result)
  return result

  // // 4. Create signature and hash data?
  // const hashedData = hashData(params)
  // .map(item => Buffer.from(encodeWithBoundary({ boundary, ...item }), 'utf-8'))

  

  // const deferred = Q.defer()
  
  // //5. Handler
  // const handler = (res) => {
  //   if (res.error) {
  //     deferred.reject(res.error)
  //     return
  //   }
    
  //   let body = ''
  //   res.on('data', (data) => {
  //     console.log('data')
  //     body += data
  //     return body
  //   })

  //   res.on('end', () => {
  //     try {
  //       const result = JSON.parse(body)

  //       deferred.resolve(result)
  //     } catch (e) { deferred.reject(e) }
  //   })

  //   res.on('error', (error) => {
  //     deferred.reject(error)
  //   })
  // } 

  // post({
  //   url,
  //   data: hashedData,
  //   file,
  //   handler,
  //   options: {
  //     ...options,
  //     boundary
  //   }
  // })

  // return deferred.promise
}


export const createHeaders = (options, file) => {
  const headers = {
    // 'Content-Type': `multipart/form-data`,
    'User-Agent': USER_AGENT,
  }
//  boundary=${options.boundary}
  if (options.contentRange) {
    headers['Content-Range'] = options.contentRange
  }

  if (options.xUniqueUploadId) {
    headers['X-Unique-Upload-Id'] = options.xUniqueUploadId
  }

  if (file) {
    const length = statSync(file)
    headers["Content-length"] = length.size
  }

  return headers
}

export const post = async ({ url, data, file, handler, options }) => {
  if (!file) return
  const lastBuffer = Buffer.from(`--${options.boundary}--`, "ascii")
  const headers = createHeaders(options, '')
  const requestUrl = new URL(url)

  const requestOptions = {
    headers,
    method: 'POST',
    port: requestUrl.port,
    pathname: requestUrl.pathname,
    host: requestUrl.host
  }

  console.log(requestOptions)
  console.log(data)

  const stream = createUploadStream(options.boundary)
  const fileHeader:Buffer = getFileHeader(options.boundary, file, options.filename)

  const postRequest = request(requestOptions, handler)

  postRequest.on('error', (err) => { 
    throw err
  })

  postRequest.setTimeout(options.timeout || 60000, () => {
    return postRequest.abort()
  })
  
  data.forEach(chunk => postRequest.write(chunk))
  postRequest.write(fileHeader)

  const readStream = createReadStream(file)

  readStream.on('error', (error) => { 
    handler({ error })
    return postRequest.abort()
  })

  readStream.pipe(stream)
  stream.pipe(postRequest)
}

const getFileHeader = (boundary: string, file: string, customName:string = ''):Buffer => {
  const filename:string = customName || basename(file)

  const encoded = encodeWithBoundary({ boundary, key: 'application/octet-stream', value: 'file', filename })

  return Buffer.from(encoded, 'binary')
}

export const createUploadStream = (boundary: string) => new Transform({
  transform(data:Buffer, encoding: any, next: Function) {
    const buffer = Buffer.isBuffer(data) ? data : Buffer.from(data, encoding)

    this.push(buffer)
    next()
  },

  flush(done:Function) {
    this.push(Buffer.from("\r\n", 'ascii'))
    this.push(Buffer.from(`--${boundary}--`, "ascii"))

    return done()
  }
})

export const largeUpload = () => {
  // if file is not null, and it is a remote url then just upload normally

// if file is not null, and there isn't filename => get the file name from file.
// Then upload chunked with resource type is raw
}

//Upload by chunk
export const chunkUpload = (path: string, options) => {
  // create readable stream
  // upload chuncked stream
  //Logic:
  /**
   * 1. Get the unique upload id from public id randomly
   * 2. Build params
   * 3. If there is custom chunk size, take it. Else take part size (who define the heck?)
   * 4. For each of the chunk, start with buffering.
   */
  const fileReader = createReadStream(path)
  const stream:Chunkable = streamFile(options)

  return fileReader.pipe(stream)

  // return pipe of the output stream
}

export const streamFile = (options):Chunkable => {
  //TODO: snakecase options
  const paramsStr = toRequestParamString({
    ...options,
    stream: true,
    xUniqueUploadId: '1212e3' //TODO - make random unique upload id on public id
  })

  const chunk = new Chunkable({
    chunkSize: options.chunkSize || options.partSize
  })

  let offset = 0

  chunk.on('ready', (buffer, isLast, next) => {
    const start = offset

    offset += buffer.length

    const contentRange = `bytes ${start}-${offset - 1}/${isLast ? offset : -1 }`

    // paramsStr.timestamp = utils.timestamp()

    const partialUpload = result => next(result.error || isLast)

    // let stream = call_api("upload", finished_part, options, function () {
    //   return [params, {}, buffer];
    // });
    // return stream.write(buffer, 'buffer', function () {
    //   return stream.end();
    // });
  })

  return chunk
}

//1. Client uploader
//2. Node uploader
//3. CLI uploader

export const explicit = () => {}