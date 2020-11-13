export const customFunction = ({ type, source }: {type: 'wasm' | 'remote', source: string }) => {
  if (!type || !source) return ''

  const functionType = `fn_${type}`

  const funcSource = type === 'remote' ? btoa(source) : source

  return `${functionType}:${funcSource}`
}