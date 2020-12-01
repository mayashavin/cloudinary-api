import { Formats, ValueAssignable } from "../../constants/variable";

export type StringValue = {
  expression: string | string[],
  formatAs?: keyof typeof Formats
}

export type Variable = {
  name: string,
  value: number | number[] | StringValue,
  assignFrom?: keyof typeof ValueAssignable
}