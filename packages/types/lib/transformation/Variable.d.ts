import { VariableFormats, ValueAssignable } from "@cld-apis/utils";

export type StringValue = {
  expression: string | string[],
  formatAs?: keyof typeof VariableFormats
}

export type Variable = {
  name: string,
  value: number | number[] | StringValue,
  assignFrom?: keyof typeof ValueAssignable
}