

export const upload = async (file, { cloud, options }) => {
  if (!file) {
    throw new Error('file is required!')
  }

  if (!cloud || !cloud.cloudName) {
    throw new Error('cloud.cloudName is required!')
  }

  const resourceType = options.resourceType || 'image'

  const path = `${UPLOAD_PREFIX}/v1_1/${cloud.cloudName}/${resourceType}/upload`

  
}

function random_public_id() {
  return crypto.randomBytes(12).toString('base64').replace(/[^a-z0-9]/g, "");
}

exports.upload = function upload(file, callback, options = {}) {
  return call_api("upload", callback, options, function () {
    let params = build_upload_params(options);
    return isRemoteUrl(file) ? [params, { file: file }] : [params, {}, file];
  });
};

exports.unsigned_upload = function unsigned_upload(file, upload_preset, callback, options = {}) {
  return exports.upload(file, callback, merge(options, {
    unsigned: true,
    upload_preset: upload_preset
  }));
};

exports.upload_large = function upload_large(path, callback, options = {}) {
  if ((path != null) && isRemoteUrl(path)) {
    // upload a remote file
    return exports.upload(path, callback, options);
  }
  if (path != null && !options.filename) {
    options.filename = path.split(/(\\|\/)/g).pop().replace(/\.[^/.]+$/, "");
  }
  return exports.upload_chunked(path, callback, extend({
    resource_type: 'raw'
  }, options));
};

exports.explicit = function explicit(public_id, callback, options = {}) {
  return call_api("explicit", callback, options, function () {
    return utils.build_explicit_api_params(public_id, options);
  });
};