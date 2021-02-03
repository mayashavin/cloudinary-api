import { placeholderTypes } from "../helpers";
import { buildImageUrl, getConfig } from 'cloudinary-build-url/dist/esm'
import { CldOptions, CloudConfig, TransformerOption } from '../../../types'

function init(props) {
  if (!props.publicId) {
    throw Error("PublicId is required to use this component.");
  }
  if ((!props.cloud || !props.cloud.cloudName) && !(getConfig() as CloudConfig).cloudName) {
    throw Error("cloudName is required to use this component.");
  }

  const chaining = props.transformations;
  const options:CldOptions = {
    cloud: props.cloud,
    transformations: {
      format: props.format || "auto",
      chaining,
    },
  };

  const placeholderEffects = placeholderTypes[props.placeholder];
  const url = buildImageUrl(props.publicId, options)
  
  return {
    placeholder: placeholderEffects ? buildImageUrl(props.publicId, {
                  cloud: props.cloud,
                  transformations: {
                    chaining: chaining.concat(placeholderEffects),
                  },
                }) : '',
    url
  }
}

export default init