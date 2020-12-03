import { Asset } from "@cld-apis/types";
import { buildApiUrl, createSignature, toRequestParamString } from "./utils";
import fetch from 'node-fetch'

export const upload = async (file, cloudConfig, assetConfig):Promise<Asset | void> => {
  const urlPrefix = buildApiUrl(cloudConfig.cloudName, assetConfig.resourceType)
  const snakeCase = require('lodash.snakecase')
  const options = snakeCase({
    ...cloudConfig,
    ...assetConfig
  })

  //1. Create params
  const paramsStr = toRequestParamString(options)
  const signature = assetConfig.signature || createSignature(paramsStr, cloudConfig.apiSecret)

  const body = JSON.stringify({
    ...options,
    signature,
    file,
  })

  const result =  await fetch(urlPrefix, {
    method: 'post',
    body,
    headers: { 'Content-Type': 'application/json' }
  })

  return result
}

//1. Client uploader
//2. Node uploader
//3. CLI uploader