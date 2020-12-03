import { CloudConfig } from "../cloud/CloudConfig";
import { TransformerOption, TransformerVideoOption } from "./TransformerOption";

export interface CldOptions {
  cloud?: CloudConfig,
  transformations?: TransformerOption | TransformerVideoOption
}
