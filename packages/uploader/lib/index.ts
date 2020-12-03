

export const upload = async (file, { cloud, options }) => {
  if (!file) {
    throw new Error('file is required!')
  }

  if (!cloud || !cloud.cloudName) {
    throw new Error('cloud.cloudName is required!')
  }

  const resourceType = options.resourceType || 'image'


  
}
